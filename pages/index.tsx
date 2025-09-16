import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
/** ======= Constants / Styles ======= */
const CONTAINER = "max-w-7xl mx-auto";
const STEEL = "#1b263b";
const BTN_SOLID =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-white text-black shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white/30";
const BTN_OUTLINE =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-[#00b4d8] text-[#00b4d8] hover:bg-[#00b4d8] hover:text-black transition";
const SECTION_TITLE =
  "text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent mb-10";
const CALL_HREF = "tel:+18332919332";
/** ======= Types ======= */
type ServiceCard = {
  title: string;
  sub: string;
  summary: string;
  thumb: string;
  bgImage: string;
  defaultService: string;
  detail: {
    tags: string[];
    sections: { heading: string; bullets: string[] }[];
    useCases?: string[];
  };
};
type Vehicle = {
  slug: "sprinter" | "cybertruck" | "f150";
  name: string;
  role: string;
  summary: string;
  highlights: string[];
  image: string;
  details: string[];
};
/** ======= Helpers ======= */
function useIsDesktop(minWidth = 1024) {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return; // ✅ SSR guard
    const mql = window.matchMedia(`(min-width: ${minWidth}px)`);
    const onChange = (mq: MediaQueryList | MediaQueryListEvent) =>
      setIsDesktop("matches" in mq ? mq.matches : (mq as MediaQueryList).matches);
    onChange(mql);
    mql.addEventListener?.("change", onChange as any);
    return () => mql.removeEventListener?.("change", onChange as any);
  }, [minWidth]);
  return isDesktop;
}
const scrollInto = (el: HTMLElement | null) =>
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
function isInteractiveClick(e: React.MouseEvent) {
  const t = e.target as HTMLElement;
  return !!t.closest("button, a, input, select, textarea, label, [data-no-toggle]");
}
/** ======= Content ======= */
const SERVICE_CARDS: ServiceCard[] = [
  {
    title: "Power & Communications",
    sub: "Restore critical power and links fast.",
    summary:
      "Micro-grids, satellite backhaul, and field networking that bring sites online when infrastructure is down.",
    thumb: "/si.jpg",
    bgImage: "/si.jpg",
    defaultService: "Power & Connectivity Solutions",
    detail: {
      tags: ["Diesel + Solar", "Battery stacks", "Starlink & SatCom", "Micro-grid"],
      sections: [
        {
          heading: "What we deliver",
          bullets: [
            "Generator + battery + solar stacks for clean, quiet runtime.",
            "Starlink/SatCom backhaul, mesh radios, and rapid deploy WiFi.",
            "Lighting, network gear, and power distribution for teams.",
            "Mobile command staging (Sprinter AWD / Cybertruck).",
            "Compact command workstation for planning and brief-backs.",
          ],
        },
      ],
      useCases: [
        "Disaster base-camp startup",
        "Critical-site power & comms",
        "Neighborhood command nodes",
      ],
    },
  },
  {
    title: "Protective Operations & Site Security",
    sub: "Stabilize, secure, and control access.",
    summary:
      "Licensed protective teams, access control, and movement planning for people and assets in dynamic environments.",
    thumb: "/guard.png",
    bgImage: "/guard.png",
    defaultService: "Emergency Response Package",
    detail: {
      tags: ["Licensed teams", "Perimeter control", "Movement control", "Low signature ops"],
      sections: [
        {
          heading: "Scope",
          bullets: [
            "Perimeter & access control with low signature posture.",
            "Client/VIP movement control; secure escorts.",
            "Property checks with photo/video proofs and status reporting.",
            "Integrates with mobile command centers for real time comms.",
            "F-150 scout trucks; Sprinter HQ for forward command.",
          ],
        },
      ],
      useCases: ["Event/VIP security", "Construction & utility site control", "Multi site patrol"],
    },
  },
  {
    title: "Command Dashboards & AI Tools",
    sub: "See the field. Decide faster.",
    summary:
      "Live maps, tasking, and AI-assisted reporting that fuse drone, team, and sensor inputs into one operational picture.",
    thumb: "/AI.png",
    bgImage: "/AI.png",
    defaultService: "Software & AI Solutions",
    detail: {
      tags: ["Dashboards", "Ops reporting", "AI copilots", "API integrations"],
      sections: [
        {
          heading: "Ops picture",
          bullets: [
            "Real time overlays (UAS, teams, sensors) with status trails.",
            "Ops tasking, checklists, and structured after action reports.",
            "AI copilots for intel summaries and client ready brief backs.",
            "API integrations with radios, cameras, and trackers.",
            "Portable ops rack fits inside mobile command vehicles.",
          ],
        },
      ],
      useCases: ["Executive situational awareness", "Dispatch & tasking", "After-action rollups"],
    },
  },
  {
    title: "Emergency Response Solutions",
    sub: "End-to-end incident support when it matters.",
    summary:
      "From first-in assessments to sustained presence: teams, gear, and mobile command centers to keep operations moving.",
    thumb: "/er.jpg",
    bgImage: "/er.jpg",
    defaultService: "Emergency Response Package",
    detail: {
      tags: ["ICS support", "SAR & Boats", "Logistics", "Comms restoration"],
      sections: [
        {
          heading: "Capabilities",
          bullets: [
            "ICS aligned incident command anchored by mobile command vehicles.",
            "Search & rescue with high water/boat capability; route validation.",
            "Damage assessment, perimeter/security, and volunteer/vendor integration.",
            "Logistics & supply shuttles; client property checks with proofs.",
            "Comms restoration: satellite, mesh, and field networking.",
          ],
        },
      ],
      useCases: ["Hurricane/wildfire response", "Township support", "Private infrastructure ops"],
    },
  },
];
const FLEET: Vehicle[] = [
  {
    slug: "sprinter",
    name: "Mercedes Sprinter - Diesel, AWD, + SatCom",
    role: "Mobile Command Unit",
    summary:
      "AWD platform outfitted for forward command with modular power, satellite comms, and crew rest.",
    highlights: ["AWD", "Modular power", "SatCom", "Command station"],
    image: "/sprinter.png",
    details: [
      "Tow capacity: 5,000 lbs for equipment trailers",
      "Payload: 3,500 lbs for command gear",
      "Range: ~450 miles with 24-gal fuel tank",
      "Interior: Configurable for 4-6 crew with workstations",
    ],
  },
  {
    slug: "cybertruck",
    name: "Cybertruck - Electric, AWD + SatCom",
    role: "Rapid Response / Modular Command & Shelter",
    summary:
      "Electric platform with onboard power, satellite comms, and fast-deploy canopy for pop-up command.",
    highlights: ["Onboard power", "SatCom", "Modular shelter", "Command workstation"],
    image: "/cybertruck.jpg",
    details: [
      "Tow capacity: 11,000 lbs for heavy equipment",
      "Payload: 2,500 lbs for rapid response gear",
      "Range: ~320 miles per charge",
      "Armor: Exoskeleton for rugged environments",
    ],
  },
  {
    slug: "f150",
    name: "F-150 - Gas, 4x4 + SatCom",
    role: "Scout / Utility Command Platform",
    summary:
      "Agile truck with power, satcom, and packable shelter to extend command into hard to reach zones.",
    highlights: ["All-terrain", "Field power", "SatCom", "Packable shelter"],
    image: "/truck.png",
    details: [
      "Tow capacity: 10,400 lbs for utility trailers",
      "Payload: 1,800 lbs for supplies",
      "Range: ~400 miles with 23-gal fuel tank",
      "Mobility: 9.4-in ground clearance for rough terrain",
    ],
  },
];
const VEHICLE_USECASES: Record<Vehicle["slug"], string[]> = {
  sprinter: [
    "Forward incident command & dispatch",
    "Damage assessment & situational awareness",
    "Perimeter/security coordination",
  ],
  cybertruck: [
    "Neighborhood command & client liaison",
    "Utility/critical site check ins",
    "Short-cycle tasking between sites",
  ],
  f150: [
    "Route clearance & access validation",
    "Perimeter checks & status sweeps",
    "Supply shuttles and spot task response",
  ],
};
const VEHICLE_DEFAULT_SERVICE: Record<Vehicle["slug"], string> = {
  sprinter: "Power & Connectivity Solutions",
  cybertruck: "Power & Connectivity Solutions",
  f150: "Power & Connectivity Solutions",
};
const SERVICE_OPTIONS = Array.from(
  new Set(SERVICE_CARDS.map((s) => s.defaultService))
);
const FAQ: { q: string; a: string }[] = [
  {
    q: "How fast can you deploy after we call?",
    a: "We can mobilize within hours for regional incidents. For multi state operations we stage gear while teams move, typically arriving same-day or next morning depending on distance and airlift availability.",
  },
  {
    q: "What does a mobile command package include?",
    a: "Satellite internet, radios/mesh, power (generator + battery), lighting, secured Wi-Fi, dashboards, and a compact workstation for planning and reporting. We scale up with additional kits as needed.",
  },
  {
    q: "Do you integrate with our existing radios, cameras, or trackers?",
    a: "Yes. We bridge LMR, IP cameras, GPS beacons, and third party APIs into a single ops picture with tasking, logs, and client reporting.",
  },
  {
    q: "Are your security teams licensed and insured?",
    a: "Yes. We deploy licensed protective personnel with appropriate insurance and compliance for the jurisdiction, coordinated with local authorities where required.",
  },
  {
    q: "Can you support extended operations (days to weeks)?",
    a: "Absolutely. We rotate crews, manage fuel/logistics, and maintain comms and power continuity with battery stacks, solar assists, and resupply.",
  },
];
/** ======= Small UI bits ======= */
const Descriptor = ({ label }: { label: string }) => (
  <span className="inline-flex items-center text-[12px] text-sky-200/85">
    <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-sky-400/70" />
    {label}
  </span>
);
/** ======= Form ======= */
function MinimalRequestForm({
  defaultService,
  defaultVehicle,
  onSubmitted,
}: {
  defaultService?: string;
  defaultVehicle?: string;
  onSubmitted?: () => void;
}) {
  const [selectedServices, setSelectedServices] = useState<string[]>(
    defaultService ? [defaultService] : []
  );
  const [selectedVehicles, setSelectedVehicles] = useState<string[]>(["No vehicle"]);
  const [startDate, setStartDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const todayISO = useMemo(() => new Date().toISOString().split("T")[0], []);
  useEffect(() => {
    if (defaultService) {
      setSelectedServices((prev) =>
        prev.includes(defaultService) ? prev : [...prev, defaultService]
      );
    }
  }, [defaultService]);
  useEffect(() => {
    if (defaultVehicle) {
      setSelectedVehicles((prev) => {
        const base = prev.includes("No vehicle") ? [] : prev;
        return base.includes(defaultVehicle) ? base : [...base, defaultVehicle];
      });
    }
  }, [defaultVehicle]);
  const serviceToggle = (opt: string) =>
    setSelectedServices((prev) =>
      prev.includes(opt) ? prev.filter((s) => s !== opt) : [...prev, opt]
    );
  const vehicleToggle = (opt: string) =>
    setSelectedVehicles((prev) => {
      if (opt === "No vehicle") return ["No vehicle"];
      const withoutNoVehicle = prev.filter((v) => v !== "No vehicle");
      if (withoutNoVehicle.includes(opt)) {
        const next = withoutNoVehicle.filter((v) => v !== opt);
        return next.length ? next : ["No vehicle"];
      }
      return [...withoutNoVehicle, opt];
    });
  const buildBody = () => {
    const params = new URLSearchParams();
    params.append("form-name", "request-service");
    params.append("subject", "New Service Request — Novator Group");
    selectedServices.forEach((s) => params.append("services", s));
    selectedVehicles.forEach((v) => params.append("vehicles", v));
    if (startDate) params.append("startDate", startDate);
    params.append("name", name);
    params.append("phone", phone);
    params.append("location", location);
    if (notes) params.append("notes", notes);
    return params.toString();
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !location || selectedServices.length === 0) return;
    setSubmitting(true);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: buildBody(),
      });
      setDone(true);
      onSubmitted?.();
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };
  if (done) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sky-100">
        <div className="font-semibold">Thanks — we’ve got your request.</div>
        <div className="text-sm opacity-80 mt-1">
          We’ll reach out quickly to coordinate next steps.
        </div>
      </div>
    );
  }
  const vehicleOptions = ["No vehicle", ...FLEET.map((v) => v.name)];
  const isServiceChecked = (opt: string) => selectedServices.includes(opt);
  const isVehicleChecked = (opt: string) => selectedVehicles.includes(opt);
  const mkId = (prefix: string, label: string) =>
    `${prefix}-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return (
    <form
      name="request-service"
      method="POST"
      action="/"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      <input type="hidden" name="form-name" value="request-service" />
      <input
        type="hidden"
        name="subject"
        value="New Service Request — Novator Group"
      />
      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      {/* Service checkboxes */}
      <fieldset className="md:col-span-3">
        <legend className="text-xs uppercase tracking-widest text-sky-300/85 mb-2">
          Service(s)
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {SERVICE_OPTIONS.map((opt) => {
            const id = mkId("svc", opt);
            return (
              <label key={opt} htmlFor={id} className="flex items-center gap-2">
                <input
                  id={id}
                  type="checkbox"
                  name="services"
                  value={opt}
                  className="h-4 w-4 rounded border-white/20 bg-white/5"
                  checked={isServiceChecked(opt)}
                  onChange={() => serviceToggle(opt)}
                />
                <span className="text-sm">{opt}</span>
              </label>
            );
          })}
        </div>
      </fieldset>
      {/* Start Date */}
      <label className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-widest text-sky-300/85">
          Start Date
        </span>
        <input
          type="date"
          name="startDate"
          className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/40"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          min={todayISO}
        />
      </label>
      {/* Vehicle checkboxes */}
      <fieldset className="md:col-span-2">
        <legend className="text-xs uppercase tracking-widest text-sky-300/85 mb-2">
          Vehicle preference(s)
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {vehicleOptions.map((opt) => {
            const id = mkId("veh", opt);
            return (
              <label key={opt} htmlFor={id} className="flex items-center gap-2">
                <input
                  id={id}
                  type="checkbox"
                  name="vehicles"
                  value={opt}
                  className="h-4 w-4 rounded border-white/20 bg-white/5"
                  checked={isVehicleChecked(opt)}
                  onChange={() => vehicleToggle(opt)}
                />
                <span className="text-sm">{opt}</span>
              </label>
            );
          })}
        </div>
      </fieldset>
      {/* Contact fields */}
      <label className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-widest text-sky-300/85">
          Your Name
        </span>
        <input
          name="name"
          className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/40"
          placeholder="Jane Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-widest text-sky-300/85">
          Phone
        </span>
        <input
          name="phone"
          className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/40"
          placeholder="(833) 291-9332"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          inputMode="tel"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-widest text-sky-300/85">
          Location
        </span>
        <input
          name="location"
          className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/40"
          placeholder="City / Site"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </label>
      <label className="md:col-span-3 flex flex-col gap-1">
        <span className="text-xs uppercase tracking-widest text-sky-300/85">
          Notes (optional)
        </span>
        <textarea
          name="notes"
          className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/40 min-h-[90px]"
          placeholder="Brief context (timeline, constraints, points of contact)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </label>
      {/* Submit */}
      <div className="md:col-span-3 flex justify-end">
        <button
          type="submit"
          disabled={
            submitting ||
            !name ||
            !phone ||
            !location ||
            selectedServices.length === 0
          }
          className="rounded-full bg-gradient-to-r from-[#00b4d8] to-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:brightness-110 disabled:opacity-50"
        >
          {submitting ? "Submitting…" : "Send Request"}
        </button>
      </div>
    </form>
  );
}
/** ======= Page ======= */
export default function Home() {
  const isDesktop = useIsDesktop(1024);
  const [expandedVehicles, setExpandedVehicles] = useState<Record<
    Vehicle["slug"],
    boolean
  >>({
    sprinter: false,
    cybertruck: false,
    f150: false,
  });
  const serviceKeys = useMemo(() => SERVICE_CARDS.map((s) => s.title), []);
  const [expandedServices, setExpandedServices] = useState<Record<string, boolean>>({});
  const [defaultService, setDefaultService] = useState("");
  const [defaultVehicle, setDefaultVehicle] = useState<string | undefined>(
    undefined
  );
  const formRef = useRef<HTMLDivElement | null>(null);
  // ❌ Lazy video loader removed
  useEffect(() => {
    setExpandedServices((prev) => {
      const next = { ...prev };
      for (const k of serviceKeys) if (next[k] === undefined) next[k] = false;
      return next;
    });
  }, [serviceKeys]);
  const openForm = useCallback((svc?: string, veh?: string) => {
    if (svc) setDefaultService(svc);
    if (veh) setDefaultVehicle(veh);
    setTimeout(() => scrollInto(formRef.current), 40);
  }, []);
  const toggleFleetAt = (idx: number, slug: Vehicle["slug"]) => {
    if (isDesktop) {
      const cols = 3;
      const rowStart = Math.floor(idx / cols) * cols;
      const rowEnd = Math.min(rowStart + cols, FLEET.length);
      const rowSlugs = FLEET.slice(rowStart, rowEnd).map((v) => v.slug);
      const allOpen = rowSlugs.every((s) => expandedVehicles[s]);
      const next = !allOpen;
      setExpandedVehicles((prev) => {
        const n = { ...prev } as Record<Vehicle["slug"], boolean>;
        rowSlugs.forEach((s) => (n[s] = next));
        return n;
      });
    } else {
      setExpandedVehicles((s) => ({ ...s, [slug]: !s[slug] }));
    }
  };
  const toggleServiceAt = (idx: number, title: string) => {
    if (isDesktop) {
      const cols = 2;
      const rowStart = Math.floor(idx / cols) * cols;
      const rowEnd = Math.min(rowStart + cols, serviceKeys.length);
      const rowTitles = serviceKeys.slice(rowStart, rowEnd);
      const allOpen = rowTitles.every((t) => expandedServices[t]);
      const next = !allOpen;
      setExpandedServices((prev) => {
        const n: Record<string, boolean> = { ...prev };
        rowTitles.forEach((t) => (n[t] = next));
        return n;
      });
    } else {
      setExpandedServices((s) => ({ ...s, [title]: !s[title] }));
    }
  };
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const stats = [
    { value: "200K+", label: "Personnel hours" },
    { value: "58+", label: "Disaster zones" },
  ];
  return (
    <div className="bg-black text-white min-h-screen relative font-sans">
      <Head>
        <title>Novator Group — Deploy. Protect. Command.</title>
        <meta
          name="description"
          content="Novator Group pioneers innovative, modular, cost-effective solutions, ensuring accessible stability and security for all in crisis. Contact John Mills if finances are a barrier."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" sizes="180x180" />
        <style>{`
          html, body, #__next, #__next > div, #__next > div > div {
            margin: 0; padding: 0; background: black; min-height: 100vh; width: 100%; overflow-x: hidden;
          }
          html { scroll-behavior: smooth; }
          .hero-h { height: 92vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; overflow: hidden; position: relative; }
          .vid-mobile { display: none; }
          .vid-desktop { display: none; }
          @media (max-width: 767px) { .hero-h { height: 88vh; } .vid-mobile { display: block; } }
          @media (min-width: 768px) { .vid-desktop { display: block; } }
          .hero-video {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            background: #000;
          }
          @media (max-width: 767px) { .vid-mobile.hero-video { object-position: center 28%; } }
          @media (min-width: 768px) { .vid-desktop.hero-video { object-position: center 15%; } }
        `}</style>
      </Head>
      {/* ======= HERO ======= */}
      <section className="relative z-10 w-full hero-h flex flex-col justify-center items-center text-center overflow-hidden pt-16">
        <video
          className="vid-mobile hero-video"
          muted
          playsInline
          autoPlay
          loop
          preload="auto"
          aria-hidden="true"
        >
          <source src="/v5.2.mp4" type="video/mp4" />
        </video>
        <video
          className="vid-desktop hero-video"
          muted
          playsInline
          autoPlay
          loop
          preload="auto"
          aria-hidden="true"
        >
          <source src="/v5.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black" />
        <div className={`${CONTAINER} relative z-10 px-6`}>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Modular Power, Connectivity, Security &amp; AI
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl mb-8 text-gray-200"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            Novator Group delivers rapid deployment infrastructure, protective
            operations, and scalable field support for mission critical environments.
          </motion.p>
          {/* Buttons */}
          <div className="mt-2 flex flex-wrap justify-center gap-3 items-center">
            <Link href="/careers" className={BTN_OUTLINE}>
              Join Our Team
            </Link>
            <motion.a
              href={CALL_HREF}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={BTN_SOLID}
              aria-label="Call us 24/7"
            >
              Call Us <span className="ml-2 text-sm font-normal text-black/80">24/7</span>
            </motion.a>
          </div>
          {/* Stats */}
          <div className="mt-10 flex justify-center">
            <div className="backdrop-blur-sm bg-black/30 rounded-2xl border border-white/10 w-full sm:w-auto max-w-md mx-auto">
              <div className="grid grid-cols-2 gap-8 p-6 sm:p-8">
                {stats.map(({ value, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center min-w-[120px] sm:min-w-[140px] text-center"
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold leading-none">
                      {value}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-gray-200 mt-2 leading-tight">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======= FLEET ======= */}
      <section id="fleet" className="relative z-10 px-6 pt-10 pb-6 bg-black scroll-mt-28 md:scroll-mt-32">
        <div className={`${CONTAINER}`}>
          <motion.h2 className={SECTION_TITLE} initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Meet The Fleet
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {FLEET.map((v, idx) => {
              const open = expandedVehicles[v.slug];
              return (
                <motion.div
                  key={v.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 shadow-xl flex flex-col h-full text-left focus:outline-none"
                  style={{ backgroundColor: STEEL }}
                  role="button"
                  tabIndex={0}
                  onClick={(e) => {
                    if (isInteractiveClick(e)) return;
                    toggleFleetAt(idx, v.slug);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleFleetAt(idx, v.slug);
                    }
                  }}
                  aria-expanded={open}
                >
                  <div className="p-6 md:p-7 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-semibold text-white">{v.name}</h3>
                        <div className="mt-0.5 text-sm text-sky-200/80">{v.role}</div>
                      </div>
                      <Image
                        src={v.image}
                        alt={`${v.name} thumbnail`}
                        width={44}
                        height={44}
                        sizes="44px"
                        className="h-11 w-11 rounded-2xl object-cover border border-white/10"
                        unoptimized={true}
                      />
                    </div>
                    <p className="mt-4 text-sm text-sky-100/90 min-h-[60px]">{v.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {v.highlights.map((h) => (
                        <Descriptor key={h} label={h} />
                      ))}
                    </div>
                  </div>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        key="fleet-details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="overflow-hidden border-t border-white/10"
                      >
                        <div className="p-6 pt-4">
                          <div className="grid gap-6 md:grid-cols-2">
                            <div>
                              <div className="mb-2 text-xs uppercase tracking-widest text-sky-300/80">
                                Technical Specs
                              </div>
                              <ul className="space-y-2 text-[15px] leading-relaxed text-sky-100/90">
                                {v.details.map((d) => (
                                  <li key={d} className="flex gap-2">
                                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                                    <span>{d}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="mt-6">
                            <div className="mb-2 text-xs uppercase tracking-widest text-sky-300/80">
                              Example Missions
                            </div>
                            <div className="flex flex-wrap gap-3">
                              {VEHICLE_USECASES[v.slug].map((u) => (
                                <Descriptor key={u} label={u} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="mt-auto px-6 pb-6 pt-4 flex items-center justify-between gap-4 border-t border-white/10">
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFleetAt(idx, v.slug);
                      }}
                      className="text-sm text-sky-200 underline decoration-dotted underline-offset-4 hover:text-sky-100 min-w-[90px] text-left"
                      data-no-toggle
                    >
                      {open ? "Hide" : "More Info"}
                    </button>
                    <motion.button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openForm(VEHICLE_DEFAULT_SERVICE[v.slug], v.name);
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="rounded-full bg-gradient-to-r from-[#00b4d8] to-sky-600 px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-110 min-w-[130px] text-center"
                      data-no-toggle
                    >
                      Reserve
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* ======= SERVICES ======= */}
      <section id="services" className="relative z-10 px-6 py-16 bg-black scroll-mt-28 md:scroll-mt-32">
        <div className={`${CONTAINER}`}>
          <motion.h2 className={SECTION_TITLE} initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Mission Solutions
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {SERVICE_CARDS.map((svc, idx) => {
              const open = !!expandedServices[svc.title];
              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 shadow-xl flex flex-col h-full text-left focus:outline-none"
                  style={{ backgroundColor: STEEL }}
                  role="button"
                  tabIndex={0}
                  onClick={(e) => {
                    if (isInteractiveClick(e)) return;
                    toggleServiceAt(idx, svc.title);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleServiceAt(idx, svc.title);
                    }
                  }}
                  aria-label={`${svc.title} – ${svc.sub}`}
                  aria-expanded={open}
                >
                  <div className="p-6 md:p-7 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white">{svc.title}</h3>
                        <p className="text-sky-200/80 text-sm">{svc.sub}</p>
                      </div>
                      <Image
                        src={svc.thumb}
                        alt={`${svc.title} thumbnail`}
                        width={44}
                        height={44}
                        sizes="44px"
                        className="h-11 w-11 rounded-2xl object-cover border border-white/10"
                        unoptimized={true}
                      />
                    </div>
                    <p className="mt-4 text-sm text-sky-100/90 min-h-[60px]">{svc.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {svc.detail.tags.map((t) => (
                        <Descriptor key={t} label={t} />
                      ))}
                    </div>
                  </div>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        key="service-details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="overflow-hidden border-t border-white/10"
                      >
                        <div className="p-6 pt-4">
                          <div className="grid gap-6 md:grid-cols-2">
                            {svc.detail.sections.map((sec) => (
                              <div key={sec.heading}>
                                <div className="mb-2 text-xs uppercase tracking-widest text-sky-300/80">
                                  {sec.heading}
                                </div>
                                <ul className="space-y-2 text-[15px] leading-relaxed text-sky-100/90">
                                  {sec.bullets.map((b) => (
                                    <li key={b} className="flex gap-2">
                                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                                      <span>{b}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          {svc.detail.useCases && (
                            <div className="mt-6">
                              <div className="mb-2 text-xs uppercase tracking-widest text-sky-300/80">
                                Example missions
                              </div>
                              <div className="flex flex-wrap gap-3">
                                {svc.detail.useCases.map((u) => (
                                  <Descriptor key={u} label={u} />
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="mt-auto px-6 pb-6 pt-4 flex items-center justify-between gap-4 border-t border-white/10">
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleServiceAt(idx, svc.title);
                      }}
                      className="text-sm text-sky-200 underline decoration-dotted underline-offset-4 hover:text-sky-100 min-w-[90px]"
                      data-no-toggle
                    >
                      {open ? "Hide" : "More Info"}
                    </button>
                    <motion.button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openForm(svc.defaultService);
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="rounded-full bg-gradient-to-r from-[#00b4d8] to-sky-600 px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-110 min-w-[130px] text-center"
                      data-no-toggle
                    >
                      Request Service
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* ======= FORM ======= */}
      <section id="request-service" className="relative z-10 px-6 pb-10 bg-black">
        <div className={`${CONTAINER}`}>
          <motion.h2 className={SECTION_TITLE} initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Service Request Form
          </motion.h2>
          <div ref={formRef} className="rounded-3xl border border-white/10 p-6 md:p-8 bg-[#0d1b2a] shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">Request Service</h3>
                <p className="text-sky-200/85 mt-1 text-sm md:text-base">
                  Quick request — select one or more services and (optionally) vehicles.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <MinimalRequestForm
                defaultService={defaultService}
                defaultVehicle={defaultVehicle}
                onSubmitted={() => scrollInto(formRef.current)}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Netlify hidden form fallback (build-time detection) */}
      <form name="request-service" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="tel" name="phone" />
        <input type="text" name="location" />
        <input type="date" name="startDate" />
        <input type="text" name="services" />
        <input type="text" name="vehicles" />
        <textarea name="notes" />
      </form>
      {/* ======= FAQ ======= */}
      <section id="faq" className="relative z-10 px-6 pb-8 bg-black">
        <div className={`${CONTAINER}`}>
          <h2 className={SECTION_TITLE}>FAQs</h2>
          <div className="space-y-3">
            {FAQ.map((item, i) => {
              const open = openFAQ === i;
              return (
                <div key={i} className="rounded-2xl border border-white/10 bg-[#0d1b2a]">
                  <button
                    className="w-full text-left px-5 py-4 md:px-6 md:py-5 flex items-start justify-between gap-4"
                    onClick={() => setOpenFAQ((cur) => (cur === i ? null : i))}
                    aria-expanded={open}
                  >
                    <span className="font-semibold">{item.q}</span>
                    <span className="text-sky-200/85">{open ? "–" : "+"}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        key="faq-body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 md:px-6 md:pb-6 text-sky-100/90 text-sm md:text-base leading-relaxed">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
export async function getStaticProps() {
  return { props: {} }; // Static page, forms still work
}