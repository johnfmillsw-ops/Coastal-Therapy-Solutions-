import Head from "next/head";
import Link from "next/link";

/**
 * Detailed job description for the Armed Guard role. Describes duties,
 * requirements, compensation and includes a call to action to apply.
 */
export default function ArmedGuardJobPage() {
  return (
    <>
      <Head>
        <title>Armed Guard – Careers at Novator</title>
        <meta
          name="description"
          content="Provide licensed armed security for high‑risk deployments as part of Novator's elite team."
        />
      </Head>
      <main className="min-h-screen bg-black text-white px-4 py-12 max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-4">Armed Guard</h1>
        <p>
          Novator Group is seeking licensed armed security professionals to protect personnel and assets in
          high‑risk environments. As an armed guard, you will escort sensitive cargo, secure perimeters and assist
          with evacuation operations. You’ll work alongside veterans and first responders in challenging conditions.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Requirements</h2>
        <ul className="list-disc list-inside space-y-1 text-[#adb5bd]">
          <li>Clean background check</li>
          <li>Valid firearm license and training</li>
          <li>Prior security experience</li>
          <li>Ability to remain calm under pressure</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6">Compensation</h2>
        <p>$450 per day, plus overtime as needed. All necessary equipment provided.</p>
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