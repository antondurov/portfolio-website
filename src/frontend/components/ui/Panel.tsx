interface PanelProps {
  children: React.ReactNode;
  label?: string;
  className?: string;
}

/**
 * The core visual unit of the site: a bordered module, like a panel on a
 * plugin's rack. `label` renders a small mono tab in the top-left corner --
 * use it for real structural labels (a section name), not decoration.
 */
function Panel({ children, label, className = "" }: PanelProps) {
  return (
    <div
      className={`relative rounded-(--radius) border border-line bg-panel ${className}`}
    >
      {label && (
        <div className="absolute -top-3 left-4 bg-bg px-2 font-mono text-[0.65rem] tracking-[0.15em] text-text-muted uppercase">
          {label}
        </div>
      )}
      <div className="p-6 sm:p-8">{children}</div>
    </div>
  );
}

export default Panel;
