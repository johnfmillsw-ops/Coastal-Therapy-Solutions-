import Head from "next/head";

export default function ResumePage() {
  return (
    <>
      <Head>
        <title>Submit Your Resume – Novator Group</title>
        <meta
          name="description"
          content="Send your resume to join the Novator Group team."
        />
      </Head>
      <main className="min-h-screen bg-black text-white px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#0096c7]">
          Submit Your Resume
        </h1>
        <div className="max-w-3xl mx-auto">
          <form
            name="resume"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            encType="multipart/form-data"
            className="space-y-4"
          >
            {/* Netlify hidden fields */}
            <input type="hidden" name="form-name" value="resume" />
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>

            <label className="block">
              <span className="text-sm">Full Name</span>
              <input
                type="text"
                name="name"
                required
                className="mt-1 w-full px-4 py-2 rounded-md bg-[#1b263b] border border-[#0096c7] focus:outline-none focus:ring-2 focus:ring-[#0096c7]"
              />
            </label>
            <label className="block">
              <span className="text-sm">Email</span>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full px-4 py-2 rounded-md bg-[#1b263b] border border-[#0096c7] focus:outline-none focus:ring-2 focus:ring-[#0096c7]"
              />
            </label>
            <label className="block">
              <span className="text-sm">Phone Number</span>
              <input
                type="tel"
                name="phone"
                required
                className="mt-1 w-full px-4 py-2 rounded-md bg-[#1b263b] border border-[#0096c7] focus:outline-none focus:ring-2 focus:ring-[#0096c7]"
              />
            </label>
            <label className="block">
              <span className="text-sm">Position Interested In</span>
              <input
                type="text"
                name="position"
                className="mt-1 w-full px-4 py-2 rounded-md bg-[#1b263b] border border-[#0096c7] focus:outline-none focus:ring-2 focus:ring-[#0096c7]"
              />
            </label>
            <label className="block">
              <span className="text-sm">Resume (PDF/DOC/DOCX)</span>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                className="mt-1 w-full text-white px-4 py-2 rounded-md bg-[#1b263b] border border-[#0096c7]"
              />
            </label>
            <label className="block">
              <span className="text-sm">Cover Letter / Message</span>
              <textarea
                name="message"
                rows={5}
                className="mt-1 w-full px-4 py-2 rounded-md bg-[#1b263b] border border-[#0096c7] focus:outline-none focus:ring-2 focus:ring-[#0096c7]"
              ></textarea>
            </label>
            <button
              type="submit"
              className="mt-2 bg-[#0096c7] hover:bg-white hover:text-black text-black font-semibold py-2 px-6 rounded-full transition"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
