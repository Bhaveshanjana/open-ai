import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <Footer/>
    </main>
  );
}
