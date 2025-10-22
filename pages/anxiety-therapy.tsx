import Head from "next/head";
import Navbar from "../components/Navbar";

export default function AnxietyTherapy() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#1F2937]">
      <Head>
        <title>Anxiety Therapy | Coastal Therapy Solutions</title>
        <meta
          name="description"
          content="Evidence-based anxiety therapy using CBT, DBT, mindfulness, and exposure to help you manage symptoms and build resilience."
        />
      </Head>

      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">Anxiety Therapy</h1>
        <p className="text-[#6B7280] mb-6">
          We use evidence-based approaches like CBT, DBT, mindfulness, and exposure therapy to
          help you understand triggers, manage symptoms, and regain control.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What to Expect</h2>
          <ul className="list-disc pl-6 text-[#374151]">
            <li>Personalized treatment plan and clear goals</li>
            <li>Skills for calming the body & mind (breathwork, grounding)</li>
            <li>Gradual exposure to feared situations with full support</li>
          </ul>
        </section>

        <a
          href="/#contact"
          className="inline-flex items-center justify-center rounded-full px-6 py-3 mt-10 font-medium bg-[#A7F3D0] text-[#1F2937] hover:bg-[#6EE7B7] transition focus:outline-none focus:ring-2 focus:ring-[#E0F2FE]"
        >
          Schedule a Free Consultation
        </a>
      </main>
    </div>
  );
}
