#!/usr/bin/env bash
#
# setup-envrc.sh
#
# Populates a local .envrc with secrets pulled from Apple Passwords
# (iCloud Keychain) via the `apw` CLI: https://github.com/bendews/apw
#
# .envrc itself is NEVER committed - it's gitignored. Anyone on the team
# who has these entries in their (shared) iCloud Keychain can run this
# script to get a working local dev environment.
#
# Prerequisites:
#   - apw installed and daemon running (`brew services start apw`)
#   - `apw auth` has been run at least once this boot
#   - The Keychain entries below exist and are shared with you via iCloud
#
# Usage:
#   ./setup-envrc.sh
#
set -euo pipefail

# --- Config: map env var name -> Keychain "site" query used by apw ------
declare -A SECRETS=(
  [DATABASE_URL]="portfolio-database-url.com"
  [API_KEY]="portfolio-api-key.com"
)

ENVRC_PATH=".envrc"
REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"

cd "$REPO_ROOT"

# --- 1. Sanity checks ------------------------------------------------------
if ! command -v apw >/dev/null 2>&1; then
  echo "error: apw is not installed or not on PATH. See https://github.com/bendews/apw" >&2
  exit 1
fi

if ! command -v node >/dev/null 2>&1; then
  echo "error: node is required to parse apw's JSON output" >&2
  exit 1
fi

# --- 2. Make sure .envrc can never be committed -----------------------------
if [ ! -f .gitignore ] || ! grep -qxF "$ENVRC_PATH" .gitignore; then
  echo "$ENVRC_PATH" >> .gitignore
  echo "Added $ENVRC_PATH to .gitignore"
fi

# If .envrc was already committed in a previous mistake, untrack it (leaves
# the file on disk, just stops git from tracking it going forward).
if git ls-files --error-unmatch "$ENVRC_PATH" >/dev/null 2>&1; then
  echo "warning: $ENVRC_PATH is currently tracked by git. Untracking it now."
  git rm --cached "$ENVRC_PATH" >/dev/null
fi

# --- 3. Fetch each secret from Keychain via apw -----------------------------
fetch_secret() {
  local query="$1"
  local json
  json="$(apw pw get "$query" 2>/dev/null)" || {
    echo "error: could not find a Keychain entry matching '$query'." >&2
    echo "       Make sure it's shared with you via iCloud Keychain." >&2
    exit 1
  }

  # apw returns a JSON array of matches; take the first exact/best match.
  # (Parsed with node, not jq, to avoid PATH collisions with any
  # same-named npm package shadowing the real jq binary - see
  # https://github.com/bendews/apw for the expected output shape.)
  local password
  password="$(echo "$json" | node -e '
    let raw = "";
    process.stdin.on("data", (c) => (raw += c));
    process.stdin.on("end", () => {
        try {
        const data = JSON.parse(raw);
        console.log(data.results[0]?.password ?? "");
        } catch {
        console.log("");
        }
    });
  ')"

  if [ -z "$password" ]; then
    echo "error: no password field found for '$query'." >&2
    exit 1
  fi

  echo "$password"
}

echo "Fetching secrets from Apple Passwords..."

: > "$ENVRC_PATH".tmp
for var_name in "${!SECRETS[@]}"; do
  query="${SECRETS[$var_name]}"
  echo "  - $var_name  (keychain: $query)"
  value="$(fetch_secret "$query")"
  # single-quote the value so shells don't expand anything inside it
  printf 'export %s="%s"\n' "$var_name" "$value" >> "$ENVRC_PATH".tmp
done

mv "$ENVRC_PATH".tmp "$ENVRC_PATH"
chmod 600 "$ENVRC_PATH"

echo "Wrote $ENVRC_PATH (permissions set to 600)."

# --- 4. Let direnv pick it up ------------------------------------------------
if command -v direnv >/dev/null 2>&1; then
  direnv allow .
  echo "direnv allowed. Your shell will pick up these vars automatically."
else
  echo "note: direnv not found - install it (brew install direnv) and hook it"
  echo "      into your shell to have $ENVRC_PATH auto-loaded."
fi

echo "Done."
