import Head from "next/head";
import Link from "next/link";

/**
 * Detailed job description for the Boat Rescue role. Details duties,
 * requirements and compensation for water rescue personnel.
 */
export default function BoatRescueJobPage() {
  return (
    <>
      <Head>
        <title>Boat Rescue – Careers at Novator</title>
        <meta
          name="description"
          content="Assist in high-water evacuation and supply missions as part of Novator's boat rescue team."
        />
      </Head>
      <main className="min-h-screen bg-black text-white px-4 py-12 max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-4">Boat Rescue</h1>
        <p>
          Join our high‑water evacuation and supply team. As a boat rescue specialist, you will operate
          small craft in flooded environments to transport citizens, deliver supplies and assist first responders.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Requirements</h2>
        <ul className="list-disc list-inside space-y-1 text-[#adb5bd]">
          <li>Strong swimming ability with certification</li>
          <li>Experience operating small boats in challenging conditions</li>
          <li>Rescue or lifeguard training</li>
          <li>Team‑player mindset</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6">Compensation</h2>
        <p>$500 per day, plus hazard pay for extended missions.</p>
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