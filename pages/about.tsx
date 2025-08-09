import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

/**
 * The About page tells the Novator story. It highlights the team's
 * veteran background, debt‑free status and mission‑focused culture.
 * This version uses the updated blue accent while leaving the body content
 * on the plain dark background (no additional container).
 */
export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us – Novator Group</title>
        <meta
          name="description"
          content="Learn more about Novator Group's mission, veteran leadership and proven emergency response expertise."
        />
      </Head>
      <div className="bg-black text-white min-h-screen">
        <section className="px-6 py-16 max-w-5xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold mb-6 text-[#0096c7]">
            About Novator Group
          </h1>
          <p className="text-lg">
            Novator Group is a veteran‑owned company specializing in emergency
            response, logistics and rapid deployment operations. We are proud to
            operate debt‑free, with a leadership team that brings over a decade of
            military and civilian crisis management experience.
          </p>

          {/* Single photo after the first paragraph */}
          <div className="my-8">
            <Image
              src="/boat.png"
              alt="Team in the field"
              width={800}
              height={500}
              className="rounded-lg object-cover w-full h-60"
            />
          </div>

          <p className="text-lg">
            Our mission is simple: deliver results fast. We’ve provided more than{" "}
            <strong className="text-[#0096c7]">200,000 personnel hours</strong>{" "}
            across over{" "}
            <strong className="text-[#0096c7]">27 disaster zones</strong>—from
            floods and hurricanes to wildfires and civil unrest. Our teams coordinate
            seamlessly with military units, police agencies, the Red Cross, FEMA and
            private contractors.
          </p>
          <p className="text-lg">
            Novator is more than a service provider. We’re a trusted partner in
            high‑pressure operations—equipped with mobile command centers, satellite
            infrastructure, security teams and autonomous technology integration.
          </p>

          {/* Two photos after the third paragraph */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <Image
              src="/coms.png"
              alt="Mobile command unit"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-60"
            />
          
            
          </div>

          <p className="text-lg font-semibold">
            When every second counts, Novator delivers.
          </p>

          {/* Highlight key facts in a simple bullet list */}
          <ul className="list-disc list-inside mt-8 space-y-2 text-[#adb5bd]">
            <li>
              <strong className="text-[#0096c7]">Debt‑Free:</strong> Financial
              stability means we invest in capability, not interest.
            </li>
            <li>
              <strong className="text-[#0096c7]">Veteran‑Owned:</strong> Led by those
              who have served and understand mission success.
            </li>
            <li>
              <strong className="text-[#0096c7]">200K+ Personnel Hours:</strong>{" "}
              Proven track record across dozens of disaster zones.
            </li>
            <li>
              <strong className="text-[#0096c7]">Interagency Collaboration:</strong>{" "}
              Seamless coordination with FEMA, military and NGOs.
            </li>
          </ul>

          {/* Call to action */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="bg-[#0096c7] hover:bg-white hover:text-black text-black font-semibold py-2 px-6 rounded-full transition"
            >
              View Our Services
            </Link>
            <Link
              href="/contact"
              className="border border-[#0096c7] text-[#0096c7] hover:bg-[#0096c7] hover:text-black py-2 px-6 rounded-full transition"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
