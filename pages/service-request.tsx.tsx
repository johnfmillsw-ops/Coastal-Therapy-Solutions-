import { useState } from "react";

/**
 * An improved service request form with higher contrast and clearer
 * visual hierarchy. The form is enclosed in a card with a slightly
 * lighter background and subtle border, and each input field has
 * generous padding and focus rings for accessibility. Labels are
 * spaced consistently and required fields are marked. Adjust the
 * styling variables to suit your brand palette.
 */
export default function ImprovedServiceRequestForm() {
  // Set up state for each form value.  Default the date of request to the
  // current date in ISO format (YYYY‑MM‑DD) for traceability.
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    description: "",
    location: "",
    date: new Date().toISOString().slice(0, 10),
    expectedStart: "",
    priority: "Medium",
    budget: "",
    notes: "",
    consent: false,
    attachments: null as File | null,
  });

  // Handle changes on text, select and checkbox inputs.
  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, type, value, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      const fileList = files && files.length > 0 ? files[0] : null;
      setFormData((prev) => ({ ...prev, attachments: fileList }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }

  // Placeholder submit handler.  Prevent default behaviour and log
  // the form values.  In a production application, this is where
  // you would call an API, send an email or otherwise persist the data.
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log("Service request submitted", formData);
    alert("Thank you for your request! We will get back to you soon.");
    // Reset only the description and notes fields to allow quick re‑entry
    setFormData((prev) => ({ ...prev, description: "", notes: "" }));
  }

  // Input styles: consistent padding, border, focus ring for all inputs
  const inputStyles =
    "w-full rounded-lg bg-[#0e223f] border border-[#17375f] text-white " +
    "placeholder-[#8094b3] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00b4d8]";

  const labelStyles = "block text-sm font-semibold mb-2";

  return (
    <main className="min-h-screen bg-black text-white py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Service Request Form
      </h1>
      {/*
       * Wrap the form in a substantial white container to create a strong
       * border. The outer wrapper uses generous padding to ensure the
       * dark form sits inside a visible light frame, evoking a digital
       * paper feel. This makes the form stand out clearly against the
       * dark page background.
       */}
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-5 shadow-2xl">
        <form
          className="bg-[#11294d] border border-[#00b4d8]/40 rounded-xl p-8 md:p-10 space-y-8"
          onSubmit={handleSubmit}
          noValidate
        >
        {/* Requester details */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className={labelStyles} htmlFor="name">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className={inputStyles}
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className={labelStyles} htmlFor="company">
              Organization/Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className={inputStyles}
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className={labelStyles} htmlFor="email">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={inputStyles}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className={labelStyles} htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className={inputStyles}
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Service selection */}
        <div>
          <label className={labelStyles} htmlFor="service">
            Service Required<span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            className={inputStyles}
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">-- Select a service --</option>
            <option value="power">Power &amp; Command Solutions</option>
            <option value="security">Security &amp; Escort</option>
            <option value="satellite">
              Satellite Infrastructure &amp; Connectivity
            </option>
            <option value="logistics">Logistics &amp; Deployment Support</option>
            <option value="software">Software &amp; A.I. Integration</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className={labelStyles} htmlFor="description">
            Detailed Description<span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={5}
            className={inputStyles}
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        {/* Location */}
        <div>
          <label className={labelStyles} htmlFor="location">
            Work Location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            className={inputStyles}
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        {/* Dates and priority */}
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className={labelStyles} htmlFor="date">
              Date of Request
            </label>
            <input
              id="date"
              name="date"
              type="date"
              required
              className={inputStyles}
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className={labelStyles} htmlFor="expectedStart">
              Expected Start Date
            </label>
            <input
              id="expectedStart"
              name="expectedStart"
              type="date"
              className={inputStyles}
              value={formData.expectedStart}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className={labelStyles} htmlFor="priority">
              Priority Level
            </label>
            <select
              id="priority"
              name="priority"
              className={inputStyles}
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        {/* Budget */}
        <div>
          <label className={labelStyles} htmlFor="budget">
            Estimated Budget (USD)
          </label>
          <input
            id="budget"
            name="budget"
            type="number"
            step="0.01"
            min="0"
            className={inputStyles}
            value={formData.budget}
            onChange={handleChange}
          />
        </div>

        {/* Attachments */}
        <div>
          <label className={labelStyles} htmlFor="attachments">
            Attachments (optional)
          </label>
          <input
            id="attachments"
            name="attachments"
            type="file"
            accept="application/pdf,image/*"
            className="w-full text-[#cbd5e1]"
            onChange={handleChange}
          />
        </div>

        {/* Additional notes */}
        <div>
          <label className={labelStyles} htmlFor="notes">
            Additional Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            className={inputStyles}
            value={formData.notes}
            onChange={handleChange}
          />
        </div>

        {/* Consent checkbox */}
        <div className="flex items-start">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            className="mr-2 mt-1 h-4 w-4"
            checked={formData.consent}
            onChange={handleChange}
          />
          <label htmlFor="consent" className="text-sm">
            I agree to the Novator Group’s privacy policy and understand that my
            personal data will be used to process this request.
          </label>
        </div>

        {/* Submit button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#00b4d8] hover:bg-white hover:text-black font-semibold py-3 px-10 rounded-full transition"
          >
            Submit Request
          </button>
        </div>
        </form>
      </div>
    </main>
  );
}