import Head from "next/head";
import Link from "next/link";

/**
 * Detailed page for the Power & Command Solutions service.
 */
export default function PowerServicePage() {
  return (
    <>
      <Head>
        <title>Power &amp; Command Solutions – Novator Group</title>
        <meta
          name="description"
          content="Learn how Novator delivers scalable power and mobile command solutions to keep operations running anywhere, from disaster zones to remote sites."
        />
      </Head>
      <section className="min-h-screen bg-black text-white px-6 py-16 max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-4 text-[#00b4d8]">Power &amp; Command Solutions</h1>
        <p>
          Reliable power and command capability are vital for mission success—not just in emergencies, but for any
          remote or austere operation. Novator delivers mobile command centers, micro‑grids and battery banks that
          integrate communications, control systems and scalable energy output. Whether restoring electricity after
          a hurricane or powering a remote base camp, our solutions ensure your teams stay operational and
          connected.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Key Capabilities</h2>
        <ul className="list-disc list-inside space-y-2 text-[#adb5bd]">
          <li>Mobile command units with onboard power, satellite connectivity, fresh water and generators</li>
          <li>High‑capacity generators, micro‑grids and modular battery storage</li>
          <li>Portable solar arrays and renewable options for sustainable operations</li>
          <li>Remote monitoring, fuel management and technical support</li>
          <li>Rapid deployment and scalable power distribution for any mission size</li>
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
