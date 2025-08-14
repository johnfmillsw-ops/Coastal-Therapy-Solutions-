// pages/fleet.tsx
import Head from "next/head";
import MeetTheFleet from "../components/MeetTheFleet";

export default function FleetPage() {
  return (
    <>
      <Head>
        <title>Meet the Fleet | Novator Group</title>
        <meta
          name="description"
          content="Mobile command units for rapid deployment: Mercedes Sprinter AWD, Cybertruck platform, and F-150 scout—power, SatCom, shelter, command."
        />
        <meta property="og:title" content="Meet the Fleet | Novator Group" />
        <meta
          property="og:description"
          content="Mobile command units for rapid deployment: Mercedes Sprinter AWD, Cybertruck platform, and F-150 scout—power, SatCom, shelter, command."
        />
      </Head>
      <main className="min-h-screen bg-[#0d1b2a] text-white">
        <div className="pt-20" />
        <MeetTheFleet />
      </main>
    </>
  );
}
