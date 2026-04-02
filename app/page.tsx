import { Footer } from "@/components/footer";
import { Header } from "@/components/header"
import { Hero_Section } from "@/components/hero-section"
import TeamSection from "@/components/team-section";


export default function Home() {
  return (
    <main>
      <Header />
      <Hero_Section />
      <TeamSection />
      <Footer />
    </main>
  );
}
