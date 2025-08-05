import Head from "next/head";
import Link from "next/link";

/**
 * Detailed page for the Private Security & Escort service. Explains
 * how Novator protects high‑risk personnel and sensitive cargo in
 * challenging environments.
 */
export default function SecurityServicePage() {
  return (
    <>
      <Head>
        <title>Private Security & Escort – Novator Group</title>
        <meta
          name="description"
          content="Discover how Novator's trained security teams provide armed escorts and secure transport for executives, NGOs and government operations."
        />
      </Head>
      <section className="min-h-screen bg-black text-white px-6 py-16 max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-4 text-[#00b4d8]">Private Security &amp; Escort</h1>
        <p>
          Safety is non‑negotiable in volatile situations. Novator’s security personnel are licensed, insured and
          extensively trained to protect people and assets. From executive protection and convoy escort to site
          security, our teams operate discretely and decisively, integrating with local authorities and mission
          partners.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Key Capabilities</h2>
        <ul className="list-disc list-inside space-y-2 text-[#adb5bd]">
          <li>Armed escorts for personnel and sensitive shipments</li>
          <li>Perimeter security and access control for field bases</li>
          <li>Close protection for VIPs, diplomats and aid workers</li>
          <li>Rapid threat assessment and evacuation planning</li>
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