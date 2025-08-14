"use client";

import React, { useMemo, useState } from "react";

const SERVICE_OPTIONS = [
  "Power & Connectivity Solutions",
  "Emergency Response Package",
  "Software & AI Solutions",
] as const;

type Props = {
  defaultService?: string;
  onSubmitted?: (payload: any) => void;
  compact?: boolean;
  onClose?: () => void; // X uses this to close without navigation
};

export default function ServiceRequestForm({
  defaultService = "",
  onSubmitted,
  compact = false,
  onClose,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    services: [] as string[],
    description: "",
    location: "",
    expectedStartDate: "",
    priority: "Medium",
    budget: "",
    consent: false,
  });

  const normalizedDefault = useMemo(() => {
    if (!defaultService) return "";
    const match = SERVICE_OPTIONS.find(
      (opt) => opt.toLowerCase() === defaultService.toLowerCase()
    );
    return match ?? defaultService;
  }, [defaultService]);

  React.useEffect(() => {
    if (normalizedDefault && !form.services.length) {
      setForm((f) => ({ ...f, services: [normalizedDefault] }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [normalizedDefault]);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleService(svc: string) {
    setForm((prev) => {
      const has = prev.services.includes(svc);
      return {
        ...prev,
        services: has ? prev.services.filter((s) => s !== svc) : [...prev.services, svc],
      };
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!form.name || !form.email || !form.services.length || !form.description || !form.consent) {
      setError("Please complete all required fields.");
      return;
    }

    const payload = { ...form, dateOfRequest: new Date().toISOString() };

    setSubmitting(true);
    try {
      const res = await fetch("/api/service-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) console.warn("No API or error response. Payload:", payload);

      onSubmitted?.(payload);
      alert("Thanks! Your request has been submitted.");

      setForm((f) => ({
        ...f,
        name: "",
        organization: "",
        email: "",
        phone: "",
        description: "",
        location: "",
        expectedStartDate: "",
        priority: "Medium",
        budget: "",
        consent: false,
      }));
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  // White card; limit height & allow scroll on mobile
  const wrapper = compact
    ? "w-full bg-white border border-[#00b4d8] rounded-2xl shadow-xl text-[#1b263b] overflow-hidden max-h-[90vh] overflow-y-auto"
    : "max-w-3xl mx-auto bg-white border border-[#00b4d8] rounded-2xl shadow-xl text-[#1b263b] overflow-hidden max-h-[90vh] overflow-y-auto";

  const label = "block text-sm font-semibold text-[#1b263b] mb-1";
  const input =
    "w-full rounded-xl bg-[#f8fafc] border border-[#cbd5e1] focus:border-[#00b4d8] focus:ring-0 text-[#1b263b] placeholder-[#64748b] px-3 py-2";

  return (
    <form className={wrapper} onSubmit={handleSubmit}>
      {/* Header: grid so logo stays LEFT, X stays RIGHT */}
      <div className="p-4 md:p-6 grid grid-cols-[auto_1fr_auto] items-center pointer-events-auto">
        {/* LEFT: Logo → Home (plain anchor; no JS to avoid interference) */}
        <a
          href="/"
          aria-label="Return home"
          className="justify-self-start inline-flex items-center gap-2"
        >
          <span className="rounded-xl overflow-hidden ring-1 ring-black/5">
            <img
              src="/logo.png"
              alt="Novator Group logo"
              className="h-10 w-auto md:h-12 block"
            />
          </span>
        </a>

        {/* spacer */}
        <div />

        {/* RIGHT: X → close only (keeps scroll position via onClose from parent) */}
        <button
          type="button"
          onClick={() => {
            if (onClose) onClose();
            else if (typeof window !== "undefined") {
              if (window.history.length > 1) window.history.back();
            }
          }}
          aria-label="Close"
          className="justify-self-end inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400"
        >
          ×
        </button>
      </div>

      <div className="border-b border-slate-200" />

      {/* Form content */}
      <div className="p-6 md:p-8">
        <h2 className="text-2xl font-semibold mb-4 text-center" style={{ color: "#00b4d8" }}>
          Request Service
        </h2>

        {error && <div className="mb-4 text-red-600 text-center">{error}</div>}

        {/* Contact fields */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className={label} htmlFor="name">Name *</label>
            <input id="name" className={input} value={form.name} onChange={(e) => update("name", e.target.value)} required />
          </div>
          <div>
            <label className={label} htmlFor="organization">Organization</label>
            <input id="organization" className={input} value={form.organization} onChange={(e) => update("organization", e.target.value)} />
          </div>
          <div>
            <label className={label} htmlFor="email">Email *</label>
            <input id="email" type="email" className={input} value={form.email} onChange={(e) => update("email", e.target.value)} required />
          </div>
          <div>
            <label className={label} htmlFor="phone">Phone</label>
            <input id="phone" className={input} value={form.phone} onChange={(e) => update("phone", e.target.value)} />
          </div>
        </div>

        {/* Services */}
        <div className="mt-6">
          <label className={label}>Service(s) Needed *</label>
          <div className="flex flex-col space-y-2">
            {SERVICE_OPTIONS.map((svc) => (
              <label key={svc} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.services.includes(svc)}
                  onChange={() => toggleService(svc)}
                  className="h-4 w-4 accent-[#00b4d8]"
                />
                <span>{svc}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="mt-6">
          <label className={label} htmlFor="description">Detailed description *</label>
          <textarea
            id="description"
            className={`${input} h-24 resize-none`}
            value={form.description}
            onChange={(e) => update("description", e.target.value)}
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div>
            <label className={label} htmlFor="location">Location / Work site</label>
            <input id="location" className={input} value={form.location} onChange={(e) => update("location", e.target.value)} />
          </div>
          <div>
            <label className={label} htmlFor="expectedStartDate">Expected start date</label>
            <input id="expectedStartDate" type="date" className={input} value={form.expectedStartDate} onChange={(e) => update("expectedStartDate", e.target.value)} />
          </div>
          <div>
            <label className={label} htmlFor="priority">Priority</label>
            <select id="priority" className={input} value={form.priority} onChange={(e) => update("priority", e.target.value)}>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Critical</option>
            </select>
          </div>
          <div>
            <label className={label} htmlFor="budget">Budget / range (optional)</label>
            <input id="budget" className={input} value={form.budget} onChange={(e) => update("budget", e.target.value)} placeholder="$25k–$50k" />
          </div>
        </div>

        {/* Consent */}
        <label className="mt-6 flex items-start gap-2 text-sm text-[#1b263b]">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => update("consent", e.target.checked)}
            className="mt-1 h-4 w-4 accent-[#00b4d8]"
          />
          <span>I agree to Novator Group’s terms and acknowledge the privacy policy. *</span>
        </label>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition bg-[#00b4d8] text-black hover:bg-[#0096c7] disabled:opacity-60 w-full md:w-auto"
        >
          {submitting ? "Submitting..." : "Submit Request"}
        </button>
      </div>
    </form>
  );
}
