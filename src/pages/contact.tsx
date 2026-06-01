function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 12l10 10 10-10L12 2zm0 4l6 6-6 6-6-6 6-6z" fill="currentColor"/></svg>
      </div>
      <span className="text-lg font-bold tracking-tight">360 Biz Health</span>
    </div>
  );
}

import { useState, useRef, useEffect } from "react";

function NavDropdown({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm font-medium text-foreground/70 transition hover:text-foreground py-2"
      >
        {title}
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-border/20 py-2 z-50">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-surface transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function Nav({ onNavigate }: { onNavigate: (page: "/" | "/contact") => void }) {
  const menuItems = [
    {
      title: "Services",
      items: [
        { label: "HR Technology & HRMS", href: "#" },
        { label: "Payroll Management", href: "#" },
        { label: "Statutory Compliance", href: "#" },
        { label: "Financial & Taxation", href: "#" },
        { label: "Insurance Advisory", href: "#" },
      ]
    },
    {
      title: "Resources",
      items: [
        { label: "Blog", href: "#" },
        { label: "Documentation", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "Case Studies", href: "#" },
      ]
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="/" onClick={(e) => { e.preventDefault(); onNavigate("/"); }} className="hover:opacity-70 transition">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {menuItems.map((menu) => (
            <NavDropdown key={menu.title} title={menu.title} items={menu.items} />
          ))}

          <a href="/#pricing" className="text-sm font-medium text-foreground/70 transition hover:text-foreground">Pricing</a>
          <a href="/#faq" className="text-sm font-medium text-foreground/70 transition hover:text-foreground">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="/contact" onClick={(e) => { e.preventDefault(); onNavigate("/contact"); }} className="text-sm font-medium text-foreground/70 transition hover:text-foreground">Contact</a>
          <a href="#" className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:opacity-90">Get Started</a>
        </div>
      </div>
    </header>
  );
}

export default function Contact({ onNavigate }: { onNavigate: (page: "/" | "/contact") => void }) {
  return (
    <div className="min-h-screen bg-background">
      <Nav onNavigate={onNavigate} />
      <main className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="text-sm font-medium text-primary">Contact</span>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
              Let's talk about your business
            </h1>
            <p className="mt-4 max-w-md text-muted-foreground">
              Whether you have a question about features, pricing, need a demo, or anything else, our team is ready to answer all your questions.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold">Email us</h3>
                  <p className="mt-1 text-sm text-muted-foreground">hello@360bizheath.io</p>
                  <p className="text-sm text-muted-foreground">support@360bizhealth.io</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold">Visit us</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Mumbai, India</p>
                  <p className="text-sm text-muted-foreground">Business District</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold">Call us</h3>
                  <p className="mt-1 text-sm text-muted-foreground">+91 (XXXX) XXX-XXXX</p>
                  <p className="text-sm text-muted-foreground">Mon–Fri, 9am–6pm IST</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <h2 className="text-xl font-bold">Send us a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium">First name</label>
                  <input type="text" placeholder="John" className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Last name</label>
                  <input type="text" placeholder="Doe" className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" placeholder="john@company.com" className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <div>
                <label className="block text-sm font-medium">Subject</label>
                <input type="text" placeholder="How can we help?" className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea rows={4} placeholder="Tell us more about your needs..." className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
              </div>
              <button type="submit" className="w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90">
                Send Message
              </button>
            </form>
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
