import Head from "next/head";

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You — Novator Group</title>
      </Head>
      <main className="min-h-screen w-full bg-black text-white flex items-center justify-center">
        <div className="max-w-lg text-center px-4">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
            Thank You
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg">
            We’ve received your submission. Our team will be in touch with you
            shortly.
          </p>
        </div>
      </main>
    </>
  );
}
