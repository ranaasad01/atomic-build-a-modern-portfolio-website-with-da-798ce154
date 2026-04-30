import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About, Projects, Footer } from "@/components/sections/About";
import { Skills, ContactSection } from "@/components/sections/Skills";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
