import Head from "next/head";
import Link from "next/link";

export default function AnxietyPage() {
  return (
    <>
      <Head>
        <title>Anxiety Therapy | Coastal Therapy Solutions</title>
        <meta
          name="description"
          content="Mindfulness, exposure, and skills-based therapy to reduce anxiety and build resilience."
        />
      </Head>
      <main className="min-h-screen bg-[url('/BG2.png')] bg-cover bg-center bg-fixed">
        <div className="bg-white/80 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto px-4 py-10">
            <Link href="/#services" className="text-[#2563EB] hover:underline">
              ← Back to Services
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mt-4">
              Anxiety Therapy
            </h1>
            <p className="mt-4 text-[#374151]">
              We combine mindfulness, exposure therapy, and practical coping
              skills to help you calm the body, focus the mind, and move
              confidently through life’s challenges.
            </p>
            <ul className="mt-6 list-disc pl-6 space-y-2 text-[#374151]">
              <li>Trigger mapping & exposure hierarchy</li>
              <li>Breathwork & grounding skills</li>
              <li>Thought reframing & CBT tools</li>
              <li>Relapse prevention planning</li>
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
