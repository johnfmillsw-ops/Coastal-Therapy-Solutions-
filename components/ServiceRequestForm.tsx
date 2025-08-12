import React, { useMemo, useState } from "react";

// Tweak these to match your exact service titles in pages/services.tsx
const SERVICE_OPTIONS = [
  "Power & Command Solutions",
  "Security & Escort",
  "Satellite Infrastructure & Connectivity",
  "Logistics & Deployment Support",
  "Software & A.I. Integration",
] as const;

type Props = {
  /** Preselect a service (e.g., from querystring or a button click) */
  defaultService?: string;
  /** Called after a successful submit */
  onSubmitted?: (payload: any) => void;
  /** If you show this in a tight space, set compact to true */
  compact?: boolean;
};

export default function ServiceRequestForm({
  defaultService = "",
  onSubmitted,
  compact = false,
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

  // Normalize an incoming defaultService to an option if possible
  const normalizedDefault = useMemo(() => {
    if (!defaultService) return "";
    const match = SERVICE_OPTIONS.find(
      (opt) => opt.toLowerCase() === defaultService.toLowerCase()
    );
    return match ?? defaultService;
  }, [defaultService]);

  // Preselect the defaultService once on mount if provided
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
      return { ...prev, services: has ? prev.services.filter((s) => s !== svc) : [...prev.services, svc] };
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    // Minimal client-side validation
    if (!form.name || !form.email || form.services.length === 0 || !form.description || !form.consent) {
      setError("Please complete all required fields.");
      return;
    }

    const payload = {
      ...form,
      dateOfRequest: new Date().toISOString(),
    };

    setSubmitting(true);
    try {
      // Try to send to your API route if present.
      const res = await fetch("/api/service-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // If no API yet or non-2xx, just fall back to console for now.
      if (!res.ok) {
        console.warn("No API or error response. Payload:", payload);
      }

      onSubmitted?.(payload);
      alert("Thanks! Your request has been submitted.");
      // Clear (keep selected services to speed new requests)
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
    } catch (err: any) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const wrapper = compact
    ? "w-full"
    : "max-w-3xl mx-auto bg-gradient-to-b from-[#1b263b] to-[#0d1b2a] border border-[#00b4d8]/60 rounded-2xl p-6 md:p-8 shadow-lg";

  const label = "block text-sm font-semibold text-[#00b4d8] mb-1";
  const input =
    "w-full rounded-xl bg-[#0d1b2a] border border-[#1b263b] focus:border-[#00b4d8] focus:ring-0 text-white placeholder-[#94a3b8] px-3 py-2";
  const section = "grid md:grid-cols-2 gap-4";

  return (
    <form onSubmit={handleSubmit} className={wrapper} noValidate>
      {!compact && (
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">Request Service</h1>
      )}

      {error && (
        <div className="mb-4 rounded-xl border border-red-400 bg-red-900/30 px-3 py-2 text-red-200">
          {error}
        </div>
      )}

      {/* Contact */}
      <div className={section}>
        <div>
          <label className={label} htmlFor="name">Name *</label>
          <input id="name" className={input} value={form.name} onChange={(e) => update("name", e.target.value)} />
        </div>
        <div>
          <label className={label} htmlFor="organization">Organization</label>
          <input id="organization" className={input} value={form.organization} onChange={(e) => update("organization", e.target.value)} />
        </div>
        <div>
          <label className={label} htmlFor="email">Email *</label>
          <input id="email" type="email" className={input} value={form.email} onChange={(e) => update("email", e.target.value)} />
        </div>
        <div>
          <label className={label} htmlFor="phone">Phone</label>
          <input id="phone" className={input} value={form.phone} onChange={(e) => update("phone", e.target.value)} />
        </div>
      </div>

      {/* Services */}
      <div className="mt-6">
        <p className={label}>Service(s) Needed *</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {SERVICE_OPTIONS.map((svc) => (
            <label key={svc} className="flex items-center gap-2 rounded-xl border border-[#1b263b] bg-[#0d1b2a] px-3 py-2 text-[#cbd5e1]">
              <input
                type="checkbox"
                className="h-4 w-4"
                checked={form.services.includes(svc)}
                onChange={() => toggleService(svc)}
              />
              <span>{svc}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Details */}
      <div className="mt-6">
        <label className={label} htmlFor="description">Detailed description *</label>
        <textarea id="description" className={`${input} min-h-[120px]`} value={form.description} onChange={(e) => update("description", e.target.value)} />
      </div>

      <div className={`${section} mt-6`}>
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
      <label className="mt-6 flex items-start gap-2 text-sm text-[#cbd5e1]">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(e) => update("consent", e.target.checked)}
          className="mt-1 h-4 w-4"
        />
        <span>
          I agree to Novator Group’s terms and acknowledge the privacy policy. *
        </span>
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition bg-[#00b4d8] text-black hover:bg-white disabled:opacity-60"
      >
        {submitting ? "Submitting..." : "Submit Request"}
      </button>
    </form>
  );
}
