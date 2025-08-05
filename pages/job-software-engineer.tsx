import Head from "next/head";
import Link from "next/link";

/**
 * Detailed job description for the Software Engineer role. Describes
 * responsibilities for building and maintaining mission‑critical tech
 * solutions in support of Novator's operations.
 */
export default function SoftwareEngineerJobPage() {
  return (
    <>
      <Head>
        <title>Software Engineer – Careers at Novator</title>
        <meta
          name="description"
          content="Build and maintain mission‑critical software solutions for Novator's emergency response and logistics operations."
        />
      </Head>
      <main className="min-h-screen bg-black text-white px-4 py-12 max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-4">Software Engineer</h1>
        <p>
          Join our technology team to develop and support the systems that power Novator’s operations. You’ll
          collaborate with emergency responders to build mapping tools, communication dashboards and logistics
          platforms that perform under pressure.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Requirements</h2>
        <ul className="list-disc list-inside space-y-1 text-[#adb5bd]">
          <li>Strong proficiency in React and Next.js</li>
          <li>Experience integrating third‑party APIs and real‑time data feeds</li>
          <li>Willingness to be on call during critical operations</li>
          <li>Ability to work independently and as part of a distributed team</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6">Compensation</h2>
        <p>$600 per day, with additional compensation for after‑hours support.</p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="bg-[#00b4d8] hover:bg-white hover:text-black text-black font-semibold py-2 px-6 rounded-full transition"
          >
            Apply Now
          </Link>
        </div>
      </main>
    </>
  );
}