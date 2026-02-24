import ScrollProgress from "@/components/ScrollProgress";
import TopBar from "@/components/TopBar";
import HookSection from "@/components/HookSection";
import OriginStory from "@/components/OriginStory";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <TopBar />
      <main>
        <HookSection />
        <OriginStory />
        {/* <CommandCenter /> — Phase 2 */}
      </main>
      <Footer />
    </>
  );
}
