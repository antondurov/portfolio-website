import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `relative px-1.5 py-2 font-mono text-[0.65rem] tracking-[0.1em] uppercase transition-colors sm:px-3 sm:text-xs sm:tracking-[0.15em] ${
    isActive ? "text-accent" : "text-text-muted hover:text-text"
  }`;

function ActiveDot({ isActive }: { isActive: boolean }) {
  return (
    <span
      className={`absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full transition-opacity ${
        isActive ? "bg-accent opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    />
  );
}

function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);

  return (
    <nav
      role="navbar"
      className="sticky top-0 z-50 border-b border-line bg-panel/90 backdrop-blur"
    >
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-2 px-4 py-3 sm:px-8">
        <NavLink
          to="/"
          className="shrink-0 font-display text-sm font-semibold tracking-wide whitespace-nowrap text-text"
        >
          ANTON DUROV
        </NavLink>

        <div className="flex items-center">
          {[
            { to: "/", label: t("Home") },
            { to: "/about", label: t("About") },
            { to: "/projects", label: t("Projects") },
            { to: "/cv", label: t("CV") },
            { to: "/contact", label: t("Contact") },
          ].map((item) => (
            <NavLink role="link" key={item.to} to={item.to} end={item.to === "/"} className={navLinkClass}>
              {({ isActive }) => (
                <>
                  {item.label}
                  <ActiveDot isActive={isActive} />
                </>
              )}
            </NavLink>
          ))}

          <div className="relative">
            <button
              type="button"
              className="px-2 py-2 font-mono text-xs tracking-[0.15em] text-text-muted uppercase transition-colors hover:text-text sm:px-3"
              aria-expanded={isOpen}
              aria-haspopup="true"
              onClick={() => setOpen((v) => !v)}
              onBlur={() => setOpen(false)}
            >
              {t("More")} <span className="text-text-faint">{isOpen ? "▲" : "▼"}</span>
            </button>
            {isOpen && (
              <div className="absolute top-full right-0 mt-2 min-w-32 rounded-[var(--radius-sm)] border border-line bg-panel-hover py-1 shadow-lg">
                <NavLink
                  to="/music"
                  className="block px-4 py-2 font-mono text-xs tracking-[0.1em] text-text-muted uppercase hover:text-accent"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {t("Music")}
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
