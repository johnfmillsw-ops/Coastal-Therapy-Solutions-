import Head from "next/head";
import Link from "next/link";

/**
 * Detailed page for the Emergency Power Solutions service. Provides
 * information about how Novator deploys mobile power units and energy
 * grids in disaster zones and remote locations.
 */
export default function PowerServicePage() {
  return (
    <>
      <Head>
        <title>Emergency Power Solutions – Novator Group</title>
        <meta
          name="description"
          content="Learn how Novator deploys mobile power units and energy grids to restore electricity in disaster zones and remote locations."
        />
      </Head>
      <section className="min-h-screen bg-black text-white px-6 py-16 max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-4 text-[#00b4d8]">Emergency Power Solutions</h1>
        <p>
          When infrastructure fails, reliable power is the first priority. Novator’s rapid deployment teams deliver
          mobile generators, micro‑grids and battery banks to disaster zones and remote operations. Our units are
          designed for quick setup and scalable output, ensuring first responders, hospitals and critical
          communications stay online.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Key Capabilities</h2>
        <ul className="list-disc list-inside space-y-2 text-[#adb5bd]">
          <li>High‑capacity diesel and gas generators with modular battery storage</li>
          <li>Portable solar arrays for sustainable, off‑grid power</li>
          <li>On‑site electrical engineers and technicians</li>
          <li>Fast deployment within 24 hours of activation</li>
        </ul>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/services"
            className="border border-white text-white hover:bg-white hover:text-black py-2 px-6 rounded-full transition"
          >
            Back to Services
          </Link>
          <Link
            href="/contact"
            className="bg-[#00b4d8] hover:bg-white hover:text-black text-black font-semibold py-2 px-6 rounded-full transition"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}