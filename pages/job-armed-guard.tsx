import Head from "next/head";
import Link from "next/link";

export default function ArmedGuardJobPage() {
  return (
    <>
      <Head>
        <title>Armed Guard – Careers at Novator</title>
        <meta
          name="description"
          content="Detailed job description for the Armed Guard role."
        />
      </Head>
      <main className="min-h-screen bg-black text-white px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-[#0096c7]">
          Armed Guard
        </h1>
        <p className="mb-6">
          Novator Group is seeking licensed armed security professionals to protect
          personnel and assets in high‑risk environments. As an armed guard, you will
          escort sensitive cargo, secure perimeters and assist with evacuation operations.
          You’ll work alongside veterans and first responders in challenging conditions.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-[#0096c7]">
          Requirements
        </h2>
        <ul className="list-disc list-inside mb-4 text-[#adb5bd]">
          <li>Clean background check</li>
          <li>Valid firearm license and training</li>
          <li>Prior security experience</li>
          <li>Ability to remain calm under pressure</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2 text-[#0096c7]">
          Compensation
        </h2>
        <p className="mb-8">
          $450 per day, plus overtime as needed. All necessary equipment provided.
        </p>

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
