import Head from "next/head";
import Link from "next/link";

export default function SoftwareEngineerJobPage() {
  return (
    <>
      <Head>
        <title>Software Engineer – Careers at Novator</title>
        <meta
          name="description"
          content="Detailed job description for the Software Engineer role."
        />
      </Head>
      <main className="min-h-screen bg-black text-white px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-[#0096c7]">
          Software Engineer
        </h1>
        <p className="mb-6">
          Build and maintain mission‑critical tech solutions supporting our
          emergency operations. Work with React/Next.js, integrate third‑party
          APIs, and ensure high availability for field teams.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-[#0096c7]">
          Requirements
        </h2>
        <ul className="list-disc list-inside mb-4 text-[#adb5bd]">
          <li>Proficiency with React/Next.js</li>
          <li>Experience integrating APIs</li>
          <li>Willingness to be on call</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2 text-[#0096c7]">
          Compensation
        </h2>
        <p className="mb-8">$600 per day, plus overtime as needed.</p>

        <Link
          href="/resume"
          className="inline-block bg-[#0096c7] hover:bg-white hover:text-black text-black font-semibold py-3 px-8 rounded-full transition"
        >
          Apply Now
        </Link>
      </main>
    </>
  );
}
