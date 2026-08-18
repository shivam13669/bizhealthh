import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Landmark,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import hrTechnology from "@/assets/hr-technology.jpg";
import statutoryCompliance from "@/assets/statutory-compliance-2.jpg";
import financialTaxation from "@/assets/financial-taxation.jpg";
import heroDashboard from "@/assets/hero-dashboard.jpg";

interface BlogsNewsProps {
  onNavigate: (page: string) => void;
}

const articles = [
  {
    id: "posh-compliance",
    category: "Compliance Desk",
    title: "POSH Act 2013: HR teams ko 2026 mein kya pata hona chahiye?",
    excerpt: "ICC formation se lekar SHe-Box integration tak, workplace ko safe aur compliant rakhne ka practical guide.",
    date: "06 Jan 2026",
    readTime: "8 min read",
    image: statutoryCompliance,
    icon: ShieldCheck,
    accent: "bg-rose-50 text-rose-600",
    highlights: ["10+ employees par Internal Committee zaroori", "Inquiry timeline: 90 days", "Training, transparency aur confidentiality are key"],
  },
  {
    id: "hrms-guide",
    category: "HR Tech",
    title: "India ke Top HRMS Software: 2026 ka smart comparison guide",
    excerpt: "Payroll, attendance, compliance aur employee experience ke liye best HRMS choose karne ka seedha breakdown.",
    date: "04 Jan 2026",
    readTime: "10 min read",
    image: hrTechnology,
    icon: UsersRound,
    accent: "bg-sky-50 text-sky-600",
    highlights: ["Payroll aur statutory compliance pehle compare karein", "Mobile attendance aur ESS ab must-have hai", "Growth ke hisaab se scalable plan chunein"],
  },
  {
    id: "leave-policy",
    category: "People & Culture",
    title: "Modern Leave Policy kaise banayein: 2026 best practices",
    excerpt: "Flexible leaves, wellbeing aur state-wise compliance ka balance banane wali practical leave-policy playbook.",
    date: "29 Dec 2025",
    readTime: "9 min read",
    image: heroDashboard,
    icon: CalendarDays,
    accent: "bg-amber-50 text-amber-600",
    highlights: ["CL, SL aur EL rules ko simple rakhein", "Floating holidays aur wellness leave se flexibility badhegi", "Payroll aur attendance systems ko connect karein"],
  },
  {
    id: "fnf-settlement",
    category: "Payroll Brief",
    title: "Full & Final Settlement: exit ke baad HR ko kya process follow karna hai?",
    excerpt: "Salary, leave encashment, gratuity aur asset clearance ko sahi timeline mein handle karne ki complete guide.",
    date: "22 Dec 2025",
    readTime: "7 min read",
    image: financialTaxation,
    icon: Landmark,
    accent: "bg-emerald-50 text-emerald-600",
    highlights: ["Final salary aur pending reimbursements clearly calculate karein", "Gratuity eligibility aur leave encashment policy verify karein", "Detailed FnF statement trust build karta hai"],
  },
];

function ArticleMeta({ date, readTime }: { date: string; readTime: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-slate-500">
      <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" />{date}</span>
      <span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" />{readTime}</span>
    </div>
  );
}

export default function BlogsNews({ onNavigate }: BlogsNewsProps) {
  const featuredArticle = articles[0];
  const latestArticles = articles.slice(1);

  return (
    <div className="min-h-screen overflow-hidden bg-[#FFFBF8]">
      <Header onNavigate={onNavigate} />

      <main className="pt-24 lg:pt-32">
        <section className="border-b border-[#E8DDD3] bg-white">
          <div className="mx-auto max-w-[1180px] px-5 py-5 sm:px-6">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              <span>360 BizHealth Journal</span>
              <span className="flex items-center gap-2 text-primary"><span className="h-2 w-2 rounded-full bg-primary" />India HR & Compliance Desk</span>
            </div>
          </div>
        </section>

        <section className="relative border-b border-[#E8DDD3] bg-[#FEF4EA] py-14 sm:py-20">
          <div className="absolute -right-28 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative mx-auto max-w-[1180px] px-5 sm:px-6">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-primary"><BookOpen className="h-4 w-4" />Business made simpler</span>
              <h1 className="mt-5 text-4xl font-black leading-[1.06] text-slate-950 sm:text-5xl lg:text-6xl">HR aur compliance ki <span className="text-primary">seedhi baat.</span></h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">Payroll, people policies aur legal compliance ke latest guides — bilkul practical Hinglish mein, taaki aapke business decisions aur bhi easy ho jaayein.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-5 py-12 sm:px-6 sm:py-16">
          <div className="mb-6 flex items-end justify-between gap-4 border-b-2 border-slate-900 pb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Editor&apos;s pick</p>
              <h2 className="mt-1 text-2xl font-black text-slate-950 sm:text-3xl">Aaj ki zaroori story</h2>
            </div>
            <span className="hidden text-sm font-semibold text-slate-500 sm:block">Trusted insights for Indian businesses</span>
          </div>

          <article className="group grid overflow-hidden rounded-3xl border border-[#E8DDD3] bg-white shadow-[0_18px_50px_-28px_rgba(0,0,0,0.25)] lg:grid-cols-[1.07fr_0.93fr]">
            <div className="relative min-h-64 overflow-hidden lg:min-h-full">
              <img src={featuredArticle.image} alt="POSH compliance guide" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm">{featuredArticle.category}</span>
            </div>
            <div className="p-7 sm:p-10">
              <div className={`grid h-11 w-11 place-items-center rounded-xl ${featuredArticle.accent}`}><featuredArticle.icon className="h-5 w-5" /></div>
              <h3 className="mt-6 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">{featuredArticle.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{featuredArticle.excerpt}</p>
              <div className="mt-6"><ArticleMeta date={featuredArticle.date} readTime={featuredArticle.readTime} /></div>
              <a href={`#${featuredArticle.id}`} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3">Poora guide padhein <ArrowRight className="h-4 w-4" /></a>
            </div>
          </article>
        </section>

        <section className="border-y border-[#E8DDD3] bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-6">
            <div className="mb-8 flex items-center justify-between border-b border-[#E8DDD3] pb-4">
              <h2 className="text-2xl font-black text-slate-950 sm:text-3xl">Latest from the desk</h2>
              <span className="hidden items-center gap-2 text-sm font-semibold text-slate-500 sm:flex"><BriefcaseBusiness className="h-4 w-4 text-primary" />For growing teams</span>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {latestArticles.map((article) => (
                <article key={article.id} className="group overflow-hidden rounded-3xl border border-[#E8DDD3] bg-[#FFFBF8] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_-24px_rgba(0,0,0,0.25)]">
                  <a href={`#${article.id}`} className="block aspect-[16/10] overflow-hidden">
                    <img src={article.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  </a>
                  <div className="p-6">
                    <span className="text-xs font-bold uppercase tracking-[0.13em] text-primary">{article.category}</span>
                    <h3 className="mt-3 text-xl font-black leading-snug text-slate-950">{article.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{article.excerpt}</p>
                    <div className="mt-5"><ArticleMeta date={article.date} readTime={article.readTime} /></div>
                    <a href={`#${article.id}`} className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-slate-800 hover:text-primary">Read story <ArrowUpRight className="h-4 w-4" /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-5 py-14 sm:px-6 sm:py-20">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Guide library</span>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">Quick take, smart action</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">Har guide se essential points, jisse aap faster decisions le sakte hain.</p>
          </div>

          <div className="space-y-6">
            {articles.map((article, index) => {
              const Icon = article.icon;
              return (
                <article id={article.id} key={article.id} className="scroll-mt-28 overflow-hidden rounded-3xl border border-[#E8DDD3] bg-white p-6 shadow-[0_12px_36px_-28px_rgba(0,0,0,0.25)] sm:p-8">
                  <div className="grid gap-7 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                      <img src={article.image} alt="" className="h-full w-full object-cover" />
                      <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-xl bg-white text-sm font-black text-slate-900 shadow-sm">0{index + 1}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <div className={`grid h-10 w-10 place-items-center rounded-xl ${article.accent}`}><Icon className="h-5 w-5" /></div>
                        <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{article.category}</span>
                      </div>
                      <h3 className="mt-4 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">{article.title}</h3>
                      <p className="mt-3 max-w-2xl text-slate-600">{article.excerpt}</p>
                      <ul className="mt-5 grid gap-2 text-sm font-medium text-slate-700 sm:grid-cols-3">
                        {article.highlights.map((highlight) => <li key={highlight} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{highlight}</li>)}
                      </ul>
                      <div className="mt-6"><ArticleMeta date={article.date} readTime={article.readTime} /></div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-slate-950 py-14 sm:py-16">
          <div className="mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-7 px-5 sm:px-6 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-300">Need expert help?</p>
              <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">HR ka load kam, business ka focus zyada.</h2>
              <p className="mt-3 max-w-2xl text-slate-300">Payroll, compliance aur people operations ko ek hi expert team ke saath streamline kijiye.</p>
            </div>
            <a href="/contact" onClick={(event) => { event.preventDefault(); onNavigate("/contact"); }} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white transition hover:bg-primary/90">Book a Demo <ArrowRight className="h-4 w-4" /></a>
          </div>
        </section>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
