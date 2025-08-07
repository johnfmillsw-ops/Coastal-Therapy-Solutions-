import Head from "next/head";
import Link from "next/link";

export default function DroneOperatorJobPage() {
  return (
    <>
      <Head>
        <title>Drone Operator – Careers at Novator</title>
        <meta
          name="description"
          content="Detailed job description for the Drone Operator role."
        />
      </Head>
      <main className="min-h-screen bg-black text-white px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-[#0096c7]">
          Drone Operator
        </h1>
        <p className="mb-6">
          Deploy drones for reconnaissance and real‑time intelligence. You will fly
          missions that gather situational awareness, assist with search and rescue,
          and monitor logistical operations.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-[#0096c7]">
          Requirements
        </h2>
        <ul className="list-disc list-inside mb-4 text-[#adb5bd]">
          <li>FAA Part 107 license</li>
          <li>Drone operations experience</li>
          <li>Map reading skills</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2 text-[#0096c7]">
          Compensation
        </h2>
        <p className="mb-8">$400 per day, plus overtime as needed.</p>

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
