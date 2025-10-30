import Head from "next/head";
import Link from "next/link";

export default function FamilyGroupPage() {
  return (
    <>
      <Head>
        <title>Family & Group Therapy | Coastal Therapy Solutions</title>
        <meta
          name="description"
          content="Supportive therapy for families and groups to strengthen connection and recovery."
        />
      </Head>
      <main className="min-h-screen bg-[url('/BG2.png')] bg-cover bg-center bg-fixed">
        <div className="bg-white/80 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto px-4 py-10">
            <Link href="/#services" className="text-[#2563EB] hover:underline">
              ← Back to Services
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mt-4">
              Family & Group Therapy
            </h1>
            <p className="mt-4 text-[#374151]">
              We create a safe, structured space to improve communication,
              repair trust, and learn supportive responses. Families and groups
              become active partners in recovery.
            </p>
            <ul className="mt-6 list-disc pl-6 space-y-2 text-[#374151]">
              <li>Communication & boundary tools</li>
              <li>Education on symptoms & cycles</li>
              <li>Skill practice & feedback</li>
              <li>Resource planning for ongoing support</li>
            </ul>

            <div className="mt-8">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium bg-[#A7F3D0] text-[#1F2937] hover:bg-[#6EE7B7] transition focus:outline-none focus:ring-2 focus:ring-[#E0F2FE]"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
