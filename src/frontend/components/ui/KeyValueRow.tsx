interface KeyValueRowProps {
  label: string;
  children: React.ReactNode;
}

/**
 * A labeled data row, styled like a spec sheet / parameter list. Used for
 * contact info, quick facts, and other short label -> value content where
 * a full paragraph would be overkill.
 */
function KeyValueRow({ label, children }: KeyValueRowProps) {
  return (
    <div className="flex flex-col gap-1 border-b border-line py-3 last:border-none sm:flex-row sm:gap-6 sm:py-4">
      <span className="w-full shrink-0 font-mono text-xs tracking-widest text-text-muted uppercase sm:w-22">
        {label}
      </span>
      <span className="text-text">{children}</span>
    </div>
  );
}

export default KeyValueRow;
