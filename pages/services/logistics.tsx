import Head from "next/head";
import Link from "next/link";

/**
 * Detailed page for the Logistics & Response Personnel service. Covers
 * how Novator mobilizes people and resources to support large‑scale
 * operations and disaster relief.
 */
export default function LogisticsServicePage() {
  return (
    <>
      <Head>
        <title>Logistics &amp; Response Personnel – Novator Group</title>
        <meta
          name="description"
          content="Find out how Novator provides staffing, deployment and resource movement to meet urgent needs in disaster zones or large operations."
        />
      </Head>
      <section className="min-h-screen bg-black text-white px-6 py-16 max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-4 text-[#00b4d8]">Logistics &amp; Response Personnel</h1>
        <p>
          Successful missions require the right people and equipment in the right place at the right time. Novator’s
          logistics experts coordinate transportation, warehousing and staffing to support relief efforts and
          operations of any scale. Our on‑call personnel are trained for austere environments and can integrate
          seamlessly with military, NGO and corporate teams.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Key Capabilities</h2>
        <ul className="list-disc list-inside space-y-2 text-[#adb5bd]">
          <li>Rapid staffing for operations, from medics and engineers to drivers and logisticians</li>
          <li>Fleet management and transport for supplies, equipment and personnel</li>
          <li>Supply chain coordination with vendors and agencies</li>
          <li>Field kitchens, shelters and base camp setup</li>
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