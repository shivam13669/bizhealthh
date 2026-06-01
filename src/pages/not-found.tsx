import Header from "@/components/Header";

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-orange-400 text-white shadow-md shadow-primary/30">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      </div>
      <span className="text-xl font-extrabold tracking-tight text-slate-800">
        <span className="text-primary">360</span> BizHealth
      </span>
    </div>
  );
}

export default function NotFound({ onNavigate }: { onNavigate: (page: "/" | "/contact") => void }) {
  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={onNavigate} />

      <main className="mx-auto max-w-7xl px-6 pt-28 pb-24 text-center">
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
