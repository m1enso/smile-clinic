import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Star,
  ChevronRight,
  Share2,
  Globe,
  Link,
  Smile,
  Shield,
  Zap,
  Award,
  Heart,
  Scissors,
  AlignCenter,
  Sparkles,
} from "lucide-react";

function ToothIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Decorative glow + ring + sparkles overlay */}
      <svg viewBox="0 0 240 290" fill="none" className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <radialGradient id="glowBg" cx="50%" cy="46%" r="50%">
            <stop offset="0%"   stopColor="#00D4C8" stopOpacity="0.22"/>
            <stop offset="100%" stopColor="#00D4C8" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <ellipse cx="120" cy="150" rx="105" ry="118" fill="url(#glowBg)"/>
        <ellipse cx="120" cy="150" rx="110" ry="126" stroke="#00D4C8"
          strokeWidth="0.8" strokeDasharray="7 10" opacity="0.22">
          <animateTransform attributeName="transform" type="rotate"
            from="0 120 150" to="360 120 150" dur="22s" repeatCount="indefinite"/>
        </ellipse>
        <circle cx="222" cy="42" r="4.5" fill="#00D4C8" opacity="0.85">
          <animate attributeName="opacity" values="0.85;0.2;0.85" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="r" values="4.5;2.8;4.5" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="14" cy="80" r="3.5" fill="#00D4C8" opacity="0.55">
          <animate attributeName="opacity" values="0.55;0.1;0.55" dur="3.1s" repeatCount="indefinite" begin="1s"/>
        </circle>
        <circle cx="8" cy="158" r="2.5" fill="white" opacity="0.7">
          <animate attributeName="opacity" values="0.7;0.15;0.7" dur="1.9s" repeatCount="indefinite" begin="0.2s"/>
        </circle>
        <circle cx="232" cy="118" r="3" fill="#00D4C8" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.6s" repeatCount="indefinite" begin="0.4s"/>
        </circle>
        <g>
          <animate attributeName="opacity" values="0.75;0.1;0.75" dur="3s" repeatCount="indefinite" begin="1.5s"/>
          <line x1="204" y1="14" x2="204" y2="22" stroke="#00D4C8" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="200" y1="18" x2="208" y2="18" stroke="#00D4C8" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
      </svg>

      {/* Tooth model — Twemoji 🦷 (CC-BY 4.0 by Twitter) */}
      <svg
        viewBox="0 0 36 36"
        className="relative z-10 w-4/5 h-4/5"
        style={{ filter: "drop-shadow(0 8px 28px rgba(0,212,200,0.35))" }}
      >
        <path
          fill="#FFFFFF"
          d="M18 2C13 2 11.11-1.276 7.002.7 3 2.625 7 17.002 9 20c-.444 2.537-.59 8.787-.171 10.91.576 2.921 1.561 5.09 2.748 5.09 2 0 2.423-13.002 6.423-13V2zm0 0c5 0 6.89-3.276 10.998-1.3C33 2.625 29 17.002 27 20c.444 2.537.59 8.787.171 10.91-.575 2.921-1.561 5.09-2.748 5.09-2 0-2.423-13.002-6.423-13V2z"
        />
        <path
          fill="#B8C8D2"
          d="M18 7.259c-2.278 0-4.419-.81-5.444-1.563-.334-.245-.406-.715-.161-1.048.246-.335.714-.405 1.048-.161.84.617 2.722 1.273 4.556 1.273 1.97 0 3.942-.709 4.489-1.217.305-.282.777-.264 1.06.039.281.304.265.778-.039 1.06-.958.891-3.431 1.617-5.509 1.617z"
        />
      </svg>
    </div>
  );
}

function useCounter(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return count;
}

function StatCard({ value, label, suffix = "", started }: { value: number; label: string; suffix?: string; started: boolean }) {
  const count = useCounter(value, 2000, started);
  return (
    <div className="text-center px-4">
      <div className="text-4xl font-black text-[#00D4C8] tabular-nums">{count}{suffix}</div>
      <div className="mt-1 text-sm text-slate-300 tracking-wide uppercase">{label}</div>
    </div>
  );
}

const services = [
  { icon: Smile, title: "Stomatologia ogólna", desc: "Kompleksowa opieka nad zębami dla całej rodziny. Przeglądy, leczenie próchnicy i profilaktyka." },
  { icon: AlignCenter, title: "Ortodoncja", desc: "Nowoczesne aparaty stałe i invisalign dla pięknego, prostego uśmiechu w każdym wieku." },
  { icon: Shield, title: "Implantologia", desc: "Trwałe implanty zębowe wykonane z biokompatybilnego tytanu. Odbuduj uśmiech na lata." },
  { icon: Sparkles, title: "Wybielanie zębów", desc: "Profesjonalne wybielanie gabinetowe i nakładkowe dla olśniewająco białego uśmiechu." },
  { icon: Zap, title: "Protetyka", desc: "Korony, mosty, protezy i licówki porcelanowe dopasowane do Twoich indywidualnych potrzeb." },
  { icon: Scissors, title: "Chirurgia stomatologiczna", desc: "Usuwanie zębów, leczenie torbieli i zabiegi periodontologiczne z minimalnym dyskomfortem." },
];

const team = [
  { name: "dr Anna Kowalska", role: "Chirurg stomatologiczny", initials: "AK" },
  { name: "dr Marek Wiśniewski", role: "Ortodonta", initials: "MW" },
  { name: "dr Katarzyna Nowak", role: "Implantolog", initials: "KN" },
];

const testimonials = [
  { name: "Marta J.", text: "Najlepsza klinika stomatologiczna w jakiej byłam! Personel jest niezwykle miły, a zabiegi wykonywane są szybko i bezboleśnie. Polecam każdemu!", rating: 5, avatar: "MJ" },
  { name: "Tomasz K.", text: "Implanty zębowe wykonane przez dr Nowak zmieniły moje życie. Profesjonalizm na najwyższym poziomie, piękne, nowoczesne wnętrze i zero bólu.", rating: 5, avatar: "TK" },
  { name: "Zofia W.", text: "Córka bała się dentysty, ale tutaj poczuła się jak w domu. Wybielanie wyszło fenomenalnie – efekty utrzymują się do dziś. Cudowny zespół!", rating: 5, avatar: "ZW" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.4 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "Strona główna", id: "home" },
    { label: "O nas", id: "about" },
    { label: "Usługi", id: "services" },
    { label: "Zespół", id: "team" },
    { label: "Kontakt", id: "contact" },
  ];

  return (
    <div className="bg-[#0A1628] text-white min-h-screen font-sans overflow-x-hidden">

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0A1628]/95 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00D4C8] to-[#0A84D4] flex items-center justify-center shadow-lg shadow-[#00D4C8]/30">
              <Smile className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black tracking-tight">Smile<span className="text-[#00D4C8]">Clinic</span></span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="text-sm text-slate-300 hover:text-[#00D4C8] transition-colors font-medium tracking-wide">
                {l.label}
              </button>
            ))}
          </div>

          <button onClick={() => scrollTo("contact")} className="hidden md:flex items-center gap-2 bg-[#00D4C8] hover:bg-[#00bfb4] text-[#0A1628] font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-[#00D4C8]/30 hover:-translate-y-0.5">
            Umów wizytę <ChevronRight className="w-4 h-4" />
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#0d1f38]/98 backdrop-blur-xl border-t border-white/10 px-6 pb-6 pt-4">
            {navLinks.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="block w-full text-left py-3 text-slate-200 hover:text-[#00D4C8] transition-colors font-medium border-b border-white/5">
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollTo("contact")} className="mt-4 w-full bg-[#00D4C8] text-[#0A1628] font-bold py-3 rounded-xl">
              Umów wizytę
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#00D4C8]/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#00D4C8 1px, transparent 1px), linear-gradient(90deg, #00D4C8 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#00D4C8]/10 border border-[#00D4C8]/30 text-[#00D4C8] text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" />
              Certyfikowana klinika stomatologiczna
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6">
              Twój uśmiech,{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4C8] to-[#0A84D4]">nasza pasja</span>
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00D4C8] to-transparent rounded-full" />
              </span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg">
              Nowoczesna stomatologia estetyczna i lecznicza w samym centrum miasta. Doświadczeni specjaliści, najnowszy sprzęt i indywidualne podejście do każdego pacjenta.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo("contact")} className="flex items-center gap-2 bg-[#00D4C8] hover:bg-[#00bfb4] text-[#0A1628] font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-[#00D4C8]/30 hover:-translate-y-1 text-base">
                Umów wizytę <ChevronRight className="w-5 h-5" />
              </button>
              <button onClick={() => scrollTo("services")} className="flex items-center gap-2 border border-white/20 hover:border-[#00D4C8]/50 text-white hover:text-[#00D4C8] font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base">
                Nasze usługi
              </button>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-2">
                {["AK","MW","KN","JB"].map((i, idx) => (
                  <div key={idx} className="w-9 h-9 rounded-full border-2 border-[#0A1628] bg-gradient-to-br from-[#00D4C8] to-[#0A84D4] flex items-center justify-center text-xs font-bold">
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#00D4C8] text-[#00D4C8]" />)}</div>
                <p className="text-xs text-slate-400 mt-0.5">Oceniani przez ponad <strong className="text-white">1200 pacjentów</strong></p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-72 h-80 md:w-96 md:h-[420px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00D4C8]/20 to-blue-600/10 blur-3xl" />
              <ToothIllustration />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-white/70 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section ref={statsRef} className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00D4C8]/10 via-[#00D4C8]/5 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4C8]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4C8]/20 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard value={15} suffix="+" label="lat doświadczenia" started={statsVisible} />
          <StatCard value={5000} suffix="+" label="zadowolonych pacjentów" started={statsVisible} />
          <StatCard value={20} suffix="+" label="specjalistów" started={statsVisible} />
          <StatCard value={98} suffix="%" label="satysfakcji pacjentów" started={statsVisible} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-[#00D4C8]/5 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="relative bg-gradient-to-br from-[#0d1f38] to-[#091524] border border-white/10 rounded-3xl p-10 overflow-hidden">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#00D4C8 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
              <div className="relative flex flex-col gap-5">
                {[
                  { label: "Diagnostyka cyfrowa", pct: 95 },
                  { label: "Znieczulenie komfortu", pct: 100 },
                  { label: "Zaawansowana sterylizacja", pct: 98 },
                  { label: "Nowoczesne materiały", pct: 97 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-300 font-medium">{item.label}</span>
                      <span className="text-[#00D4C8] font-bold">{item.pct}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#00D4C8] to-[#0A84D4] rounded-full" style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-4 bg-[#00D4C8]/10 border border-[#00D4C8]/20 rounded-2xl p-4">
                <div className="w-12 h-12 bg-[#00D4C8]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-[#00D4C8]" />
                </div>
                <div>
                  <p className="font-bold text-sm">Certyfikat ISO 9001:2015</p>
                  <p className="text-slate-400 text-xs mt-0.5">Najwyższy standard jakości usług medycznych</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <span className="text-[#00D4C8] text-sm font-semibold uppercase tracking-widest">O nas</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black leading-tight">
              Stawiamy na <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4C8] to-[#0A84D4]">doskonałość</span> w każdym szczególe
            </h2>
            <p className="mt-6 text-slate-400 leading-relaxed">
              Smile Clinic to miejsce, gdzie nowoczesna technologia spotyka się z troskliwą opieką. Od 2009 roku pomagamy pacjentom odzyskać pewność siebie dzięki pięknemu i zdrowemu uśmiechowi.
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Nasz zespół składa się z doświadczonych specjalistów stale podnoszących swoje kwalifikacje. Stosujemy wyłącznie certyfikowane materiały i najnowocześniejszy sprzęt diagnostyczny.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: Heart, text: "Troska o pacjenta na pierwszym miejscu" },
                { icon: Shield, text: "Gwarancja bezpieczeństwa i sterylności" },
                { icon: Zap, text: "Nowoczesna technologia laserowa" },
                { icon: Award, text: "Wielokrotnie nagradzany zespół" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00D4C8]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-[#00D4C8]" />
                  </div>
                  <p className="text-sm text-slate-300 leading-snug">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00D4C8] text-sm font-semibold uppercase tracking-widest">Co oferujemy</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black">Nasze <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4C8] to-[#0A84D4]">usługi</span></h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">Oferujemy pełen zakres usług stomatologicznych – od profilaktyki po zabiegi specjalistyczne.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="group relative bg-white/5 hover:bg-white/8 border border-white/10 hover:border-[#00D4C8]/40 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00D4C8]/10 cursor-pointer overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D4C8]/5 rounded-full blur-2xl group-hover:bg-[#00D4C8]/10 transition-colors" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D4C8]/20 to-[#0A84D4]/20 border border-[#00D4C8]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <s.icon className="w-6 h-6 text-[#00D4C8]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-[#00D4C8] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Dowiedz się więcej <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00D4C8] text-sm font-semibold uppercase tracking-widest">Poznaj nas</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black">Nasz <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4C8] to-[#0A84D4]">zespół</span></h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">Doświadczeni specjaliści z pasją do stomatologii i indywidualnym podejściem do każdego pacjenta.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((doc, i) => (
              <div key={i} className="group relative bg-white/5 border border-white/10 hover:border-[#00D4C8]/40 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00D4C8]/10 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00D4C8]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative mx-auto mb-5 w-24 h-24">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00D4C8] to-[#0A84D4] blur-md opacity-30 group-hover:opacity-60 transition-opacity" />
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#00D4C8]/20 to-[#0A84D4]/20 border-2 border-[#00D4C8]/30 flex items-center justify-center text-2xl font-black text-[#00D4C8]">
                    {doc.initials}
                  </div>
                </div>
                <h3 className="text-lg font-bold">{doc.name}</h3>
                <p className="mt-1 text-[#00D4C8] text-sm font-medium">{doc.role}</p>
                <p className="mt-3 text-slate-400 text-sm">Wieloletnie doświadczenie i indywidualne podejście do pacjenta.</p>
                <div className="mt-5 flex justify-center gap-1">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-[#00D4C8] text-[#00D4C8]" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00D4C8]/5 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00D4C8] text-sm font-semibold uppercase tracking-widest">Opinie</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black">Co mówią <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4C8] to-[#0A84D4]">pacjenci</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-[#00D4C8]/30 transition-colors">
                <div className="text-5xl text-[#00D4C8]/30 font-serif leading-none mb-4">"</div>
                <p className="text-slate-300 leading-relaxed text-sm">{t.text}</p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00D4C8] to-[#0A84D4] flex items-center justify-center text-xs font-bold text-[#0A1628]">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <div className="flex gap-0.5 mt-0.5">
                      {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-3 h-3 fill-[#00D4C8] text-[#00D4C8]" />)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00D4C8] text-sm font-semibold uppercase tracking-widest">Kontakt</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black">Umów <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4C8] to-[#0A84D4]">wizytę</span></h2>
            <p className="mt-4 text-slate-400">Skontaktuj się z nami lub wypełnij formularz – oddzwonimy w ciągu 24 godzin.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Adres", value: "ul. Piękna 12, 00-549 Warszawa" },
                { icon: Phone, label: "Telefon", value: "+48 22 123 45 67" },
                { icon: Mail, label: "E-mail", value: "rejestracja@smileclinic.pl" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#00D4C8]/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#00D4C8]/15 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#00D4C8]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</p>
                    <p className="mt-0.5 font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
              <div className="bg-gradient-to-br from-[#00D4C8]/10 to-[#0A84D4]/10 border border-[#00D4C8]/20 rounded-2xl p-6">
                <p className="font-bold mb-3">Godziny otwarcia</p>
                {[
                  ["Poniedziałek – Piątek", "08:00 – 20:00"],
                  ["Sobota", "09:00 – 15:00"],
                  ["Niedziela", "Nieczynne"],
                ].map(([day, hours]) => (
                  <div key={day} className="flex justify-between text-sm py-1.5 border-b border-white/5 last:border-0">
                    <span className="text-slate-400">{day}</span>
                    <span className={hours === "Nieczynne" ? "text-slate-500" : "text-[#00D4C8] font-semibold"}>{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <form className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                {[{ label: "Imię", placeholder: "Jan" }, { label: "Nazwisko", placeholder: "Kowalski" }].map((field) => (
                  <div key={field.label}>
                    <label className="block text-xs text-slate-400 uppercase tracking-wider mb-1.5">{field.label}</label>
                    <input type="text" placeholder={field.placeholder} className="w-full bg-white/5 border border-white/15 focus:border-[#00D4C8]/60 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors" />
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-xs text-slate-400 uppercase tracking-wider mb-1.5">Telefon</label>
                <input type="tel" placeholder="+48 600 000 000" className="w-full bg-white/5 border border-white/15 focus:border-[#00D4C8]/60 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs text-slate-400 uppercase tracking-wider mb-1.5">Usługa</label>
                <select className="w-full bg-[#0d1f38] border border-white/15 focus:border-[#00D4C8]/60 text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors">
                  <option value="">Wybierz usługę...</option>
                  {services.map((s) => <option key={s.title}>{s.title}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-400 uppercase tracking-wider mb-1.5">Wiadomość</label>
                <textarea rows={3} placeholder="Opisz swoje potrzeby lub zadaj pytanie..." className="w-full bg-white/5 border border-white/15 focus:border-[#00D4C8]/60 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full bg-[#00D4C8] hover:bg-[#00bfb4] text-[#0A1628] font-bold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-[#00D4C8]/30 hover:-translate-y-0.5 text-base">
                Wyślij zapytanie
              </button>
              <p className="text-center text-xs text-slate-500">Twoje dane są bezpieczne i chronione zgodnie z RODO.</p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00D4C8] to-[#0A84D4] flex items-center justify-center">
                  <Smile className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-black">Smile<span className="text-[#00D4C8]">Clinic</span></span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">Nowoczesna klinika stomatologiczna w Warszawie. Twój uśmiech jest naszą misją.</p>
              <div className="mt-5 flex gap-3">
                {[Share2, Globe, Link].map((Icon, i) => (
                  <button key={i} className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#00D4C8]/20 border border-white/10 hover:border-[#00D4C8]/40 flex items-center justify-center transition-all">
                    <Icon className="w-4 h-4 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-bold text-sm mb-4 text-white uppercase tracking-wider">Usługi</p>
              <ul className="space-y-2.5">
                {services.slice(0, 4).map((s) => (
                  <li key={s.title}><button className="text-sm text-slate-400 hover:text-[#00D4C8] transition-colors">{s.title}</button></li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-bold text-sm mb-4 text-white uppercase tracking-wider">Klinika</p>
              <ul className="space-y-2.5">
                {["O nas", "Zespół", "Cennik", "Blog", "Praca", "Kontakt"].map((item) => (
                  <li key={item}><button className="text-sm text-slate-400 hover:text-[#00D4C8] transition-colors">{item}</button></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-slate-500">© 2024 Smile Clinic. Wszelkie prawa zastrzeżone.</p>
            <div className="flex gap-5">
              {["Polityka prywatności", "Regulamin", "RODO"].map((item) => (
                <button key={item} className="text-xs text-slate-500 hover:text-[#00D4C8] transition-colors">{item}</button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
