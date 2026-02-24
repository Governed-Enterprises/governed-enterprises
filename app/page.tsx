import ScrollProgress from "@/components/ScrollProgress";
import TopBar from "@/components/TopBar";
import HookSection from "@/components/HookSection";
import OriginStory from "@/components/OriginStory";
import CommandCenter from "@/components/CommandCenter";
import Footer from "@/components/Footer";
import SoundToggle from "@/components/SoundToggle";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <TopBar />
      <SoundToggle />
      <main>
        <HookSection />
        <OriginStory />
        <CommandCenter />
      </main>
      <Footer />
    </>
  );
}
