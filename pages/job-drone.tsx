import Head from "next/head";
import Link from "next/link";

/**
 * Detailed job description for the Drone Operator role. Outlines the
 * responsibilities and skills required for reconnaissance and intel
 * gathering in the field.
 */
export default function DroneOperatorJobPage() {
  return (
    <>
      <Head>
        <title>Drone Operator – Careers at Novator</title>
        <meta
          name="description"
          content="Deploy drones for reconnaissance and real‑time intelligence as a Novator drone operator."
        />
      </Head>
      <main className="min-h-screen bg-black text-white px-4 py-12 max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-4">Drone Operator</h1>
        <p>
          As a drone operator, you will pilot unmanned aerial systems to gather real‑time imagery and data for
          commanders and relief coordinators. Your work enables rapid situational awareness, damage assessment and
          mission planning.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Requirements</h2>
        <ul className="list-disc list-inside space-y-1 text-[#adb5bd]">
          <li>FAA Part 107 certification</li>
          <li>Experience flying drones in various environments</li>
          <li>Proficiency in reading maps and interpreting aerial imagery</li>
          <li>Comfort working in remote or austere conditions</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6">Compensation</h2>
        <p>$400 per day, plus performance bonuses for high‑priority missions.</p>
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