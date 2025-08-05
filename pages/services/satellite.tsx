import Head from "next/head";
import Link from "next/link";

/**
 * Detailed page for the Satellite Communications & Connectivity service.
 * Describes how Novator enables off‑grid teams to stay connected with
 * reliable satellite voice and data links.
 */
export default function SatelliteServicePage() {
  return (
    <>
      <Head>
        <title>Satellite Comms &amp; Connectivity – Novator Group</title>
        <meta
          name="description"
          content="Learn about Novator's field‑ready satellite communication tools and broadband services for off‑grid operations."
        />
      </Head>
      <section className="min-h-screen bg-black text-white px-6 py-16 max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-4 text-[#00b4d8]">Satellite Comms &amp; Connectivity</h1>
        <p>
          Communication is critical when traditional networks are down. Novator provides portable satellite phones,
          broadband terminals and mesh networking systems to keep teams connected anywhere on the planet. Our
          specialists handle setup and training, so your operation stays online without interruption.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Key Capabilities</h2>
        <ul className="list-disc list-inside space-y-2 text-[#adb5bd]">
          <li>Iridium and Inmarsat voice/data terminals</li>
          <li>Portable VSAT broadband dishes for high‑bandwidth needs</li>
          <li>Starlink satellite kits for rapid deployment</li>
          <li>24/7 network monitoring and technical support</li>
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