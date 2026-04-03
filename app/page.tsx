import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero_Section } from "@/components/hero-section";
import { ServiceSection } from "@/components/service-section";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero_Section />
      <ServiceSection />
      <Footer />
    </main>
  );
}
