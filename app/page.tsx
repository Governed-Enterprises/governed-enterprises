import ScrollProgress from "@/components/ScrollProgress";
import TopBar from "@/components/TopBar";
import HookSection from "@/components/HookSection";
import OriginStory from "@/components/OriginStory";
import CommandCenter from "@/components/CommandCenter";
import Footer from "@/components/Footer";
import SoundToggle from "@/components/SoundToggle";

const noiseSvg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`;

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <TopBar />
      <SoundToggle />
      <main className="relative">
        {/* Noise texture overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-30 opacity-[0.02]"
          style={{
            backgroundImage: noiseSvg,
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
          }}
          aria-hidden="true"
        />
        <HookSection />
        <OriginStory />
        <CommandCenter />
      </main>
      <Footer />
    </>
  );
}
