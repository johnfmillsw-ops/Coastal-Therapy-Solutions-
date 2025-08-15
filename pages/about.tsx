import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const CONTAINER = "max-w-5xl mx-auto";

  return (
    <>
      <Head>
        <title>About Us – Novator Group</title>
        <meta
          name="description"
          content="Learn about Novator Group’s mission, veteran leadership, modular capabilities, and proven emergency response expertise."
        />
        <style>{`
          html, body, #__next, #__next > div, #__next > div > div {
            margin: 0 !important;
            padding: 0 !important;
            background: black !important;
            min-height: 100vh !important;
            width: 100% !important;
            overflow-x: hidden !important;
          }
          footer, .footer {
            background: #0d1b2a !important;
            margin-top: 0 !important;
            position: relative !important;
            z-index: 0 !important;
          }
        `}</style>
      </Head>
      <div className="bg-black text-white min-h-screen font-sans flex flex-col gap-0 mt-[-2rem]">
        <section className="px-6 py-16">
          <div className={CONTAINER}>
            <h1 className="text-4xl font-bold mb-6">About Novator Group</h1>
            <p className="text-lg">
              Novator Group is a veteran-owned company specializing in emergency
              response, logistics and rapid deployment operations. We operate
              <strong className="text-[#0096c7]"> debt‑free</strong> and build
              <strong className="text-[#0096c7]"> modular, fast</strong> capabilities—stackable kits and
              software modules that spin up in hours, not days.
            </p>
            <Image
              src="/boat.png"
              alt="Boat"
              width={600}
              height={240}
              className="my-8 rounded-lg h-60 w-full object-cover"
              loading="lazy"
            />
            <p className="text-lg">
              We’ve delivered over
              <strong className="text-[#0096c7]"> 200,000 personnel hours</strong>
              across
              <strong className="text-[#0096c7]"> 27+ disaster zones</strong>—floods,
              hurricanes, wildfires and civil unrest. Our teams integrate seamlessly
              with military units, police agencies, the Red Cross, FEMA and private
              partners.
            </p>
            <p className="text-lg">
              Capabilities include mobile power &amp; command, satellite
              connectivity, protective operations, and software &amp; A.I. integration—
              assembled as modular kits that scale with your mission.
            </p>
            <p className="text-lg font-semibold mt-8">
              When every second counts, Novator delivers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <Image
                src="/coms.png"
                alt="Communications Gear"
                width={600}
                height={240}
                className="rounded-lg h-60 w-full object-cover"
                loading="lazy"
              />
              
              
               
              
            </div>
            <ul className="list-disc list-inside mt-8 space-y-2 text-[#adb5bd]">
              <li>
                <strong className="text-[#0096c7]">Debt‑Free:</strong> Financial
                stability means we invest in capability, not interest.
              </li>
              <li>
                <strong className="text-[#0096c7]">Veteran‑Owned:</strong> Led by
                those who have served and understand mission success.
              </li>
              <li>
                <strong className="text-[#0096c7]">200K+ Personnel Hours:</strong>
                Proven track record across dozens of disaster zones.
              </li>
              <li>
                <strong className="text-[#0096c7]">Interagency Collaboration:</strong>
                Seamless coordination with FEMA, military and NGOs.
              </li>
              <li>
                <strong className="text-[#0096c7]">Modular &amp; Fast:</strong>
                Stackable kits and software modules that spin up in hours.
              </li>
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="bg-[#0096c7] hover:bg-white hover:text-black text-black font-semibold py-2 px-6 rounded-full transition"
              >
                View Our Services
              </Link>
              <Link
                href="/contact"
                className="border border-[#0096c7] text-[#0096c7] hover:bg-[#00b4d8] hover:text-black py-2 px-6 rounded-full transition"
              >
                Contact Us
              </Link>
            </div>
            <h2 className="text-2xl font-semibold mt-12 mb-6">
              A Message from Our Founder
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-full md:w-1/3">
                <Image
                  src="/founder.png"
                  alt="Founder headshot"
                  width={400}
                  height={288}
                  className="w-full h-60 md:h-72 object-contain rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-lg">
                  As founder and director of operations, I built Novator Group to deliver modular
                  capabilities fast—power, connectivity, security and software—so teams can operate
                  anywhere. When every second counts, our kits and code turn on mission‑ready capacity
                  in hours.
                </p>
                <p className="mt-2 text-[#0096c7] font-semibold">
                  – John Mills, Founder &amp; Director of Operations
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}