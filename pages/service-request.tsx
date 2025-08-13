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
    const { name, type, value } = e.target;

    // Narrow the event target before accessing properties that only exist on inputs.
    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      const isChecked = e.target.checked;
      setFormData((prev) => ({ ...prev, [name]: isChecked }));
    } else if (type === "file" && e.target instanceof HTMLInputElement) {
      const fileList = e.target.files;
      const file = fileList && fileList.length > 0 ? fileList[0] : null;
      setFormData((prev) => ({ ...prev, attachments: file }));
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
    <>
      {/* Service Request Form title */}
      <h1 className="text-2xl font-bold mb-4">Service Request Form</h1>

      {/* Wrap the form in a substantial white container to create a strong
         border. The outer wrapper uses generous padding to ensure the
         dark form sits inside a visible light frame, evoking a digital
         paper feel. This makes the form stand out clearly against the
         dark page background. */}
      <form onSubmit={handleSubmit} className="bg-[#06152a] p-8 rounded-lg">
        {/* Requester details */}
        <div className="mb-6">
          <label className={labelStyles} htmlFor="name">
            Name *
          </label>
          <input
            className={inputStyles}
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <label className={labelStyles} htmlFor="company">
            Organization/Company
          </label>
          <input
            className={inputStyles}
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
          />

          <label className={labelStyles} htmlFor="email">
            Email *
          </label>
          <input
            className={inputStyles}
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <label className={labelStyles} htmlFor="phone">
            Phone
          </label>
          <input
            className={inputStyles}
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Service selection */}
        <div className="mb-6">
          <label className={labelStyles} htmlFor="service">
            Service Required *
          </label>
          <select
            className={inputStyles}
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">-- Select a service --</option>
            <option value="Power & Command Solutions">Power & Command Solutions</option>
            <option value="Security & Escort">Security & Escort</option>
            <option value="Satellite Infrastructure & Connectivity">
              Satellite Infrastructure & Connectivity
            </option>
            <option value="Logistics & Deployment Support">Logistics & Deployment Support</option>
            <option value="Software & A.I. Integration">Software & A.I. Integration</option>
          </select>
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className={labelStyles} htmlFor="description">
            Detailed Description *
          </label>
          <textarea
            className={inputStyles}
            id="description"
            name="description"
            required
            rows={4}
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        {/* Location */}
        <div className="mb-6">
          <label className={labelStyles} htmlFor="location">
            Work Location
          </label>
          <input
            className={inputStyles}
            id="location"
            name="location"
            type="text"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        {/* Dates and priority */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className={labelStyles} htmlFor="date">
              Date of Request
            </label>
            <input
              className={inputStyles}
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className={labelStyles} htmlFor="expectedStart">
              Expected Start Date
            </label>
            <input
              className={inputStyles}
              id="expectedStart"
              name="expectedStart"
              type="date"
              value={formData.expectedStart}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className={labelStyles} htmlFor="priority">
              Priority Level
            </label>
            <select
              className={inputStyles}
              id="priority"
              name="priority"
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
        <div className="mb-6">
          <label className={labelStyles} htmlFor="budget">
            Estimated Budget (USD)
          </label>
          <input
            className={inputStyles}
            id="budget"
            name="budget"
            type="number"
            min="0"
            step="0.01"
            value={formData.budget}
            onChange={handleChange}
          />
        </div>

        {/* Attachments */}
        <div className="mb-6">
          <label className={labelStyles} htmlFor="attachments">
            Attachments (optional)
          </label>
          <input
            className={inputStyles}
            id="attachments"
            name="attachments"
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.png"
            onChange={handleChange}
          />
        </div>

        {/* Additional notes */}
        <div className="mb-6">
          <label className={labelStyles} htmlFor="notes">
            Additional Notes
          </label>
          <textarea
            className={inputStyles}
            id="notes"
            name="notes"
            rows={4}
            value={formData.notes}
            onChange={handleChange}
          />
        </div>

        {/* Consent checkbox */}
        <div className="mb-6 flex items-center">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            className="mr-2"
            checked={formData.consent}
            onChange={handleChange}
          />
          <label htmlFor="consent">
            I agree to the Novator Group’s privacy policy and understand that my
            personal data will be used to process this request.
          </label>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-[#00b4d8] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#0096c7]"
        >
          Submit Request
        </button>
      </form>
    </>
  );
}
