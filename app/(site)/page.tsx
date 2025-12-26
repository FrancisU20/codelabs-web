import About from "./sections/about";
import AwsShowcase from "./sections/aws-showcase";
import Capabilities from "./sections/capabilities";
import CaseStudies from "./sections/case-studies";
import Clients from "./sections/clients";
import Contact from "./sections/contact";
import ContactInfo from "./sections/contact-info";
import Footer from "./sections/footer";
import Hero from "./sections/hero";
import Navbar from "./sections/navbar";
import TechStack from "./sections/tech-stack";
import TrustBar from "./sections/trust-bar";
import WhatsAppButton from "../ui/whatsapp-button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main className="relative">
        <Hero />
        <TrustBar />
        <Clients />
        <Capabilities />
        <AwsShowcase />
        <About />
        <CaseStudies />
        <TechStack />
        <ContactInfo />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
