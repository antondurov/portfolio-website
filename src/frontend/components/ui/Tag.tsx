interface TagProps {
  children: React.ReactNode;
}

/** Small mono chip, used for tags/skills lists. */
function Tag({ children }: TagProps) {
  return (
    <span className="rounded-full border border-line-strong px-2.5 py-1 font-mono text-[0.7rem] text-text-muted">
      {children}
    </span>
  );
}

export default Tag;
