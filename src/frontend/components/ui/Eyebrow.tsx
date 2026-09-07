interface EyebrowProps {
  children: React.ReactNode;
  index?: string;
}

/**
 * Small mono-uppercase label, styled like a parameter readout on a plugin
 * panel. Used above page/section headings. `index` is optional and should
 * only be used where the content is genuinely sequential (e.g. CV sections).
 */
function Eyebrow({ children, index }: EyebrowProps) {
  return (
    <div className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-accent uppercase">
      {index && <span className="text-text-faint">{index}</span>}
      <span>{children}</span>
    </div>
  );
}

export default Eyebrow;
