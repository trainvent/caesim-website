const workflow = [
  {
    title: "Describe the images you do not want",
    text: "Point Caesim at a full gallery and define the visual property you want removed, from duplicates and screenshots to off-brand or low-quality shots.",
  },
  {
    title: 'Cut them into a separate folder',
    text: 'Matching files are moved into a dedicated "cut" folder, so your original library is trimmed without forcing you to delete everything immediately.',
  },
  {
    title: "Review, restore, or remove",
    text: "Keep the cleaned library, inspect the cut folder, and decide what stays archived, gets restored, or disappears for good.",
  },
];

const highlights = [
  "Made for photographers, archive-heavy teams, and anyone with an overgrown camera roll.",
  'Safer than bulk deletion because the unwanted set is moved, not immediately destroyed.',
  "Fast to explain: define the property, run the cut, review the result.",
];

const promptTiles = [
  {
    title: "Filter with image recognition",
    shell: "caesim cut ./photos --find receipt --dry-run",
    text: "Preview image-recognition matches before moving anything into the cut folder.",
  },
  {
    title: (
      <span>
        Custom Chatbot delivered by{' '}
        <a
          href="https://backboard.io/"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-[var(--foreground)]"
        >
          backboard.io
        </a>
      </span>
    ),
    shell: "caesim ai-assist",
    text: "Start the interactive assistant that turns cleanup requests into safe cut commands.",
  },
];

const installSteps = [
  "Download the prototype release for Debian-based Linux and install it locally.",
  "Run a dry scan with one of Caesim's supported rules, such as screenshots, duplicates, blurry, dark, landscape, or portrait.",
  'Let Caesim move every match into the "cut" folder for review.',
];

const prototypeReleaseUrl =
  "https://github.com/trainvent/caesim/releases/latest";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-6 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--accent-2)]">
              Caesim
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Image library trimming for the folders that got out of hand.
            </p>
            <p className="mt-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              Prototype available
            </p>
          </div>
          <a
            href="#install"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-[var(--foreground)] transition hover:border-[var(--accent)] hover:bg-white/5"
          >
            Installation
          </a>
        </header>

        <div className="grid flex-1 items-center gap-16 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div className="relative z-10">
            <p className="inline-flex rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.28em] text-[var(--accent-2)]">
              Cut clutter, keep control
            </p>
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[var(--foreground)] sm:text-6xl lg:text-8xl">
              trim  a libary based on criteria
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              Caesim started as a simple advertised idea: describe the kind of
              images you want out, then move every match into a separate{" "}
              <span className="text-[var(--foreground)]">cut</span> folder.
              A first prototype is now available for Debian-based Linux, so you
              can try the local workflow yourself.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={prototypeReleaseUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[#15130f] transition hover:bg-[var(--accent-2)]"
              >
                Download prototype
              </a>
              <a
                href="#install"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent)] hover:bg-white/5"
              >
                See install flow
              </a>
              <a
                href="#workflow"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent)] hover:bg-white/5"
              >
                How it works
              </a>
            </div>
            <ul className="mt-10 grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(255,210,126,0.3),_transparent_55%)] blur-2xl" />
            <div className="rounded-[2rem] border border-white/10 bg-[var(--panel)] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#16171b] p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent-2)]">
                      Preview
                    </p>
                    <h2 className="mt-2 text-xl font-medium text-[var(--foreground)]">
                      Gallery cut session
                    </h2>
                  </div>
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#ff8a65]" />
                    <span className="h-3 w-3 rounded-full bg-[#ffd166]" />
                    <span className="h-3 w-3 rounded-full bg-[#06d6a0]" />
                  </div>
                </div>

                <div className="mt-5 space-y-4 font-mono text-sm text-[#d7d7d9]">
                  <div className="rounded-2xl bg-[#0d0e12] p-4 text-[var(--accent-2)]">
                    caesim cut ./photo-library --rule screenshots
                  </div>
                  <div className="rounded-2xl border border-white/10 p-4">
                    supported rules: screenshots, duplicates, blurry, dark,
                    landscape, portrait
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 p-4">
                      scanned files
                      <div className="mt-2 text-3xl text-[var(--foreground)]">
                        18,240
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 p-4">
                      moved to /cut
                      <div className="mt-2 text-3xl text-[var(--foreground)]">
                        2,148
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-dashed border-[var(--accent)]/45 p-4 text-[var(--muted)]">
                    Review the cut folder before deleting anything permanently.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="workflow"
        className="mx-auto w-full max-w-7xl px-6 pb-12 sm:px-10 lg:px-12"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {workflow.map((item, index) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8"
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent-2)]">
                0{index + 1}
              </p>
              <h2 className="mt-6 text-2xl font-medium text-[var(--foreground)]">
                {item.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="install"
        className="mx-auto w-full max-w-7xl px-6 pb-20 pt-8 sm:px-10 lg:px-12"
      >
        <div className="grid gap-6 pb-8 lg:grid-cols-2">
          {promptTiles.map((item, index) => (
              <article
                key={index}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8"
              >
              <h2 className="mt-6 text-2xl font-medium text-[var(--foreground)]">
                {item.title}
              </h2>
              <div className="mt-5 rounded-2xl bg-[#0a0b0f] p-4 font-mono text-sm text-[var(--accent-2)]">
                {item.shell}
              </div>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent-2)]">
              Prototype download
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl">
              The advertised product now has a first Debian Linux build.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">
              Caesim now has a prototype release for Debian-based Linux.
              Download it from GitHub, install it locally, then run a dry scan
              with a supported rule before letting the app move matching files
              into a cut folder for review.
            </p>
            <a
              href={prototypeReleaseUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex rounded-full border border-[var(--accent)]/45 px-5 py-3 text-sm font-medium text-[var(--accent-2)] transition hover:border-[var(--accent)] hover:bg-[var(--accent)]/10"
            >
              Get the latest release on GitHub
            </a>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-[#111216] p-5">
            <div className="rounded-2xl bg-[#0a0b0f] p-5 font-mono text-sm text-[#d7d7d9]">
              <p className="text-[var(--accent-2)]">
                $ download caesim for Debian Linux to the /tmp folder
              </p>
              <p className="mt-2">
                $ sudo apt install /tmp/caesim_*.deb
              </p>
              <p className="mt-2">
                $ caesim cut ./my-photos --rule screenshots --dry-run
              </p>
              <p className="mt-2">
                $ caesim cut ./my-photos --rule screenshots
              </p>
            </div>
            <ol className="mt-6 space-y-4">
              {installSteps.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-4 rounded-2xl border border-white/10 p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-semibold text-[#15130f]">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-[var(--muted)]">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-7xl px-6 pb-10 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>Caesim is a prototype for Debian-based Linux.</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <a
              href="https://next.trainvent.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[var(--foreground)]"
            >
              next.trainvent.com
            </a>
            <a
              href="mailto:info@trainvent.com"
              className="transition hover:text-[var(--foreground)]"
            >
              info@trainvent.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
