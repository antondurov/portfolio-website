import Eyebrow from "@/components/ui/Eyebrow";

interface PageProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
  align?: "left" | "center";
}

/**
 * Shared page shell. Every page renders through this so spacing, max-width,
 * and heading structure stay consistent site-wide. To add a new page:
 * wrap its content in <Page title="..."> and it inherits the layout for
 * free -- no per-page layout code needed.
 */
function Page({ eyebrow, title, intro, children, align = "left" }: PageProps) {
  const isCentered = align === "center";

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
      <header className={isCentered ? "text-center" : "text-left"}>
        {eyebrow && (
          <div className={isCentered ? "flex justify-center" : ""}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
        )}
        <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p
            className={`mt-4 max-w-xl text-lg text-text-muted ${
              isCentered ? "mx-auto" : ""
            }`}
          >
            {intro}
          </p>
        )}
      </header>
      <div className="mt-12 text-left">{children}</div>
    </main>
  );
}

export default Page;
