import Head from "next/head";
import Link from "next/link";

export default function BoatRescueJobPage() {
  return (
    <>
      <Head>
        <title>Boat Rescue – Careers at Novator</title>
        <meta
          name="description"
          content="Detailed job description for the Boat Rescue role."
        />
      </Head>
      <main className="min-h-screen bg-black text-white px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-[#0096c7]">
          Boat Rescue
        </h1>
        <p className="mb-6">
          Assist in high‑water evacuation and supply missions. You’ll operate and
          navigate rescue boats, ensuring the safe transport of people and essential
          cargo in flood and disaster zones.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-[#0096c7]">
          Requirements
        </h2>
        <ul className="list-disc list-inside mb-4 text-[#adb5bd]">
          <li>Swimmer certification</li>
          <li>Boat handling experience</li>
          <li>Rescue training</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2 text-[#0096c7]">
          Compensation
        </h2>
        <p className="mb-8">$500 per day, plus overtime as needed.</p>

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
