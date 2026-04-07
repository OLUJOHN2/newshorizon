// src/pages/Home.tsx
import HeroSection from "../components/home/HeroSection";
import LatestNews from "../components/home/LatestNews";
import MustRead from "../components/home/MustRead";
import WeeklyHighlight from "../components/home/WeeklyHighlight";
import TopCreators from "../components/home/TopCreators";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <LatestNews />
      <MustRead />
      <WeeklyHighlight />
      <TopCreators />
      <Footer />
    </main>
  );
}
