import { useState, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Users,
  CreditCard,
  Calendar,
  Coffee,
  Receipt,
  BarChart3,
  Briefcase,
  Heart,
  Clock,
  Gift,
  FileSpreadsheet,
  ShieldCheck,
  Scale,
  HeartPulse,
  BookOpen,
  Calculator,
  CheckSquare,
  Building2,
  Users2,
  Mail
} from "lucide-react";

interface HeaderProps {
  onNavigate: (page: "/" | "/contact") => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const currentPath = window.location.pathname;
      if (currentPath === "/contact") {
        onNavigate("/");
        setTimeout(() => {
          const el = document.getElementById(href.substring(1));
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.getElementById(href.substring(1));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href === "/contact") {
      e.preventDefault();
      onNavigate("/contact");
    } else if (href === "/") {
      e.preventDefault();
      onNavigate("/");
    }
    setMobileMenuOpen(false);
  };

  const menuItems = [
    {
      title: "Products",
      key: "products",
      dropdownItems: [
        { title: "HR Software", desc: "Core HR & directory management", icon: Users, href: "#features" },
        { title: "Payroll Software", desc: "Automated payroll & compliance", icon: CreditCard, href: "#features" },
        { title: "Attendance Management System", desc: "Biometric & geo-tracked shifts", icon: Calendar, href: "#features" },
        { title: "Leave Management System", desc: "Leave request & approval workflows", icon: Coffee, href: "#features" },
        { title: "Expense Management Software", desc: "Digitized expense claims & audits", icon: Receipt, href: "#features" },
        { title: "Performance Management Software", desc: "Appraisals, KPIs & feedback loops", icon: BarChart3, href: "#features" },
        { title: "Recruitment Management Software", desc: "Applicant tracking & onboarding", icon: Briefcase, href: "#features" },
        { title: "Employee Engagement", desc: "Surveys, recognition & rewards", icon: Heart, href: "#features" },
        { title: "Employee Timesheet Software", desc: "Project-wise time tracking", icon: Clock, href: "#features" },
        { title: "Flexi Benefits", desc: "Flexible tax-saving benefits", icon: Gift, href: "#features" },
      ],
    },
    {
      title: "Services",
      key: "services",
      dropdownItems: [
        { title: "HR & Payroll Outsourcing", desc: "Let experts handle your operations", icon: FileSpreadsheet, href: "#features" },
        { title: "Statutory Compliance Services", desc: "PF, ESIC, PT & labor law compliance", icon: ShieldCheck, href: "#features" },
        { title: "Financial & Taxation Advisory", desc: "GST, tax audits & planning", icon: Scale, href: "#features" },
        { title: "Group Health Insurance", desc: "Premium health policies for employees", icon: HeartPulse, href: "#features" },
      ],
    },
    {
      title: "Pricing",
      key: "pricing",
      href: "#pricing",
    },
    {
      title: "Resources",
      key: "resources",
      dropdownItems: [
        { title: "Blogs & News", desc: "Expert compliance & HR insights", icon: BookOpen, href: "#blogs" },
        { title: "Tax Calculators", desc: "Gratuity, EPF & HRA calculators", icon: Calculator, href: "#features" },
        { title: "Case Studies", desc: "See how we help clients scale", icon: CheckSquare, href: "#benefits" },
      ],
    },
    {
      title: "About Us",
      key: "about",
      dropdownItems: [
        { title: "Our Story", desc: "Who we are & our mission", icon: Building2, href: "#benefits" },
        { title: "Careers", desc: "Join our fast-growing team", icon: Users2, href: "#benefits" },
        { title: "Contact Us", desc: "Get in touch with our team", icon: Mail, href: "/contact" },
      ],
    },
  ];

  return (
    <>
      {/* ----------------- DESKTOP HEADER (Capsule Navigation) ----------------- */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 lg:block hidden ${isScrolled ? "py-2" : "py-4"}`}>
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
          <header
            className={`flex items-center justify-between bg-white border border-slate-100 rounded-full transition-all duration-300 ${
              isScrolled 
                ? "h-[66px] px-8 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.08)]" 
                : "h-[78px] px-10 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.05)]"
            }`}
          >
            {/* Logo */}
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, "/")}
              className="flex items-center gap-2.5 transition-transform hover:scale-[1.01] shrink-0"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-orange-400 text-white shadow-sm shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-800">
                <span className="text-primary">360</span> BizHealth
              </span>
            </a>

            {/* Desktop Nav Links */}
            <nav className="flex items-center gap-7">
              {menuItems.map((item) => {
                const hasDropdown = !!item.dropdownItems;
                return (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => hasDropdown && setActiveDropdown(item.key)}
                    onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                  >
                    {hasDropdown ? (
                      <button
                        className={`flex items-center gap-1 text-[15px] font-semibold text-slate-700 transition-colors cursor-pointer ${
                          activeDropdown === item.key ? "text-primary" : "text-slate-700 hover:text-primary"
                        }`}
                      >
                        {item.title}
                        <ChevronDown
                          className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-300 ${
                            activeDropdown === item.key ? "rotate-180 text-primary" : ""
                          }`}
                        />
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href || "#")}
                        className="text-[15px] font-semibold text-slate-700 hover:text-primary py-2 transition-colors block"
                      >
                        {item.title}
                      </a>
                    )}

                    {/* Dropdown Menu Pane */}
                    {hasDropdown && activeDropdown === item.key && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white border border-slate-100 shadow-[0_20px_50px_-12px_rgba(255,92,53,0.12)] rounded-2xl p-4 w-[350px] max-h-[480px] overflow-y-auto animate-in fade-in slide-in-from-top-3 duration-200 z-50">
                        <div className="space-y-0.5">
                          {item.dropdownItems?.map((subItem) => {
                            const Icon = subItem.icon;
                            return (
                              <a
                                key={subItem.title}
                                href={subItem.href}
                                onClick={(e) => handleLinkClick(e, subItem.href)}
                                className="group flex items-start gap-3 p-2 rounded-xl hover:bg-orange-50/50 transition-colors"
                              >
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-50 group-hover:bg-primary/10 text-slate-500 group-hover:text-primary transition-colors">
                                  <Icon className="h-4.5 w-4.5 stroke-[1.8]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">
                                    {subItem.title}
                                  </p>
                                  {subItem.desc && (
                                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                                      {subItem.desc}
                                    </p>
                                  )}
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Buttons */}
            <div className="flex items-center gap-5">
              <a
                href="#pricing"
                onClick={(e) => handleLinkClick(e, "#pricing")}
                className="px-6 py-2.5 text-[14px] font-semibold text-white bg-primary rounded-full hover:bg-primary/95 transition-all duration-300 hover:scale-[1.01] shadow-sm shadow-primary/10"
              >
                Book a Demo
              </a>
              <a
                href="/contact"
                onClick={(e) => handleLinkClick(e, "/contact")}
                className="px-6 py-2.5 text-[14px] font-semibold text-white bg-primary rounded-full hover:bg-primary/95 transition-all duration-300 hover:scale-[1.01] shadow-sm shadow-primary/10"
              >
                Login
              </a>
            </div>
          </header>
        </div>
      </div>

      {/* ----------------- MOBILE HEADER (Flat Full-Width White Bar) ----------------- */}
      <div className="fixed top-0 left-0 right-0 z-50 lg:hidden">
        <header className="flex items-center justify-between bg-white border-b border-slate-100 h-16 px-5 shadow-sm">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, "/")}
            className="flex items-center gap-2 transition-transform hover:scale-[1.01] shrink-0"
          >
            <div className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-orange-400 text-white shadow-sm shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-800">
              <span className="text-primary">360</span> BizHealth
            </span>
          </a>

          {/* Right side: Login button + Hamburger aligned inline */}
          <div className="flex items-center gap-3">
            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, "/contact")}
              className="px-4.5 py-1.5 text-[13px] font-semibold text-white bg-primary rounded-full hover:bg-primary/95 transition-all"
            >
              Login
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 text-slate-700 hover:text-primary transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </header>
      </div>

      {/* ----------------- STICKY BOTTOM BUTTON (Mobile Only CTA) ----------------- */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white/95 to-transparent z-40">
        <a
          href="#pricing"
          onClick={(e) => handleLinkClick(e, "#pricing")}
          className="flex items-center justify-center w-full py-3 text-base font-bold text-white bg-primary rounded-full hover:bg-primary/95 transition-all shadow-[0_8px_24px_-4px_rgba(255,92,53,0.35)]"
        >
          Book a Demo →
        </a>
      </div>

      {/* Mobile Drawer menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white p-6 shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-300">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <span className="text-lg font-bold tracking-tight text-slate-800">
                  <span className="text-primary">360</span> BizHealth
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-500 hover:text-primary transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto py-6 space-y-4">
              {menuItems.map((item) => {
                const hasDropdown = !!item.dropdownItems;
                const isExpanded = expandedMobileSection === item.key;

                return (
                  <div key={item.key} className="border-b border-slate-50 pb-3">
                    {hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setExpandedMobileSection(isExpanded ? null : item.key)}
                          className="flex items-center justify-between w-full text-base font-bold text-slate-800 py-1 hover:text-primary transition-colors cursor-pointer"
                        >
                          {item.title}
                          <ChevronDown
                            className={`h-4 w-4 text-slate-500 transition-transform duration-300 ${
                              isExpanded ? "rotate-180 text-primary" : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`mt-2 pl-4 space-y-3 overflow-hidden transition-all duration-300 ${
                            isExpanded ? "max-h-[350px] opacity-100 py-1" : "max-h-0 opacity-0 pointer-events-none"
                          }`}
                        >
                          {item.dropdownItems?.map((subItem) => {
                            const Icon = subItem.icon;
                            return (
                              <a
                                key={subItem.title}
                                href={subItem.href}
                                onClick={(e) => handleLinkClick(e, subItem.href)}
                                className="flex items-center gap-3 py-1 hover:text-primary transition-colors"
                              >
                                <div className="flex h-7 w-7 items-center justify-center rounded bg-slate-50 text-slate-500">
                                  <Icon className="h-4.5 w-4.5" />
                                </div>
                                <span className="text-sm font-semibold text-slate-700">{subItem.title}</span>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href || "#")}
                        className="text-base font-bold text-slate-800 py-1 block hover:text-primary transition-colors"
                      >
                        {item.title}
                      </a>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Footer Buttons */}
            <div className="border-t border-slate-100 pt-6 space-y-3">
              <a
                href="#pricing"
                onClick={(e) => handleLinkClick(e, "#pricing")}
                className="flex items-center justify-center w-full py-2.5 text-sm font-semibold text-white bg-primary rounded-full hover:bg-primary/95 transition-all shadow-md shadow-primary/20"
              >
                Book a Demo
              </a>
              <a
                href="/contact"
                onClick={(e) => handleLinkClick(e, "/contact")}
                className="flex items-center justify-center w-full py-2.5 text-sm font-semibold text-white bg-primary rounded-full hover:bg-primary/95 transition-all shadow-md shadow-primary/20"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
