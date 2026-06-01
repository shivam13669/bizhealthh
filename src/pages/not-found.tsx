function Logo() {
  return (
    <img
      src="https://cdn.builder.io/api/v1/image/assets%2F43596492d87340d8ad1ef959dfd2e151%2Fd29800e07e68485f818c1e1b71feb592?format=webp&width=800&height=1200"
      alt="360 Biz Health"
      className="h-10 w-auto"
    />
  );
}

export default function NotFound({ onNavigate }: { onNavigate: (page: "/" | "/contact") => void }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="/" onClick={(e) => { e.preventDefault(); onNavigate("/"); }} className="hover:opacity-70 transition">
            <Logo />
          </a>
          <a href="#" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90">Get Template</a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8">
            <span className="text-9xl font-extrabold text-primary">404</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Page Not Found
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Sorry, the page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a 
              href="/" 
              onClick={(e) => { e.preventDefault(); onNavigate("/"); }}
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition hover:scale-[1.02]"
            >
              Back to Home
            </a>
            <a 
              href="/contact" 
              onClick={(e) => { e.preventDefault(); onNavigate("/contact"); }}
              className="rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold transition hover:bg-surface"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-border bg-surface py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <Logo />
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} 360 Biz Health. All rights reserved.</p>
          <div className="flex gap-5 text-sm text-muted-foreground">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
