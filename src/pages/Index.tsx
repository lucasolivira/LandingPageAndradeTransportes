import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import DifferentialsSection from "@/components/landing/DifferentialsSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import CoverageSection from "@/components/landing/CoverageSection";
import GallerySection from "@/components/landing/GallerySection";
import CTASection from "@/components/landing/CTASection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <DifferentialsSection />
        <SocialProofSection />
        <CoverageSection />
        <GallerySection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
