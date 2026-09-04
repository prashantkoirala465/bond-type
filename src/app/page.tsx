import { BondTypeCard } from "@/components/bond-type/bond-type-card";

const BUILT_FROM = [
  "One clock. Every letter interpolates between keyposes on the same global ease, zero stagger — so a bond's angle, length, birth, and death all fall out of wherever the letters currently sit, with no state of its own.",
  "A bond is leftover space. It runs between two letters' optical centers, inset from each one's real ink edge, and is measured in whole pixel cells rather than a free-space threshold — so it's born as one square and grows by whole squares as the letters part.",
  "The pixel cell is measured, not declared. A capital gets rasterized to an offscreen canvas once, and the GCD of its ink runs recovers the face's own grid — so a bond stays the same drawn material as the letters even if the font or card size changes.",
  "Six scatter poses, each line built from its own contour — an arc, a vee, a rake, a wave, a two-step — never the same contour on both lines at once, and never the same pose twice running.",
];

const CONSTRAINTS = [
  "Bonds only connect letters within a word. A proximity rule that lets any two close letters bond turns two names into one lattice — the moment that happens, it stops reading as two words.",
  "Drawn as pixels on the type's own grid, never as a stroke. A round-capped line between two bitmap letters reads as a different drawing pasted on top of them.",
  "No spring, no overshoot on return. A weak damped bounce lands a bitmap letter on a neighbouring cell and steps back — what should read as a settle reads as arriving twice.",
  "Reduced motion draws the plain typeset name, held still. A frozen molecule is an accident of timing; the name is the composition at rest.",
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-8">
        <span className="font-pixel text-sm tracking-tight">Bond Type</span>
        <a
          href="https://github.com/prashantkoirala465/bond-type"
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          GitHub
        </a>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 pb-16">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            A name that unfolds into a molecule.
          </h1>
          <p className="mt-4 leading-relaxed text-muted">
            The letters drift apart into nodes, and stair-stepped runs of
            square pixels grow as bonds in the space between them — never
            reaching across to the other word. It re-scatters through a few
            more shapes, then folds back into plain typeset text and holds.
          </p>
        </div>

        <BondTypeCard />
      </main>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:grid-cols-2">
          <div>
            <h2 className="font-pixel text-xs uppercase tracking-wide text-muted">
              How it&apos;s built
            </h2>
            <ul className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
              {BUILT_FROM.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-pixel text-xs uppercase tracking-wide text-muted">
              Constraints
            </h2>
            <ul className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
              {CONSTRAINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-line px-6 py-8 text-sm text-muted">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span>© {year} Prashant Koirala</span>
          <a
            href="https://github.com/prashantkoirala465/bond-type"
            className="transition-colors hover:text-foreground"
          >
            Source
          </a>
        </div>
      </footer>
    </div>
  );
}
