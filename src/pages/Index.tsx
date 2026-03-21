import {
  Header,
  HeroSection,
  AboutSection,
  DifferentialsSection,
  SocialProofSection,
  CoverageSection,
  GallerySection,
  CTASection,
  ContactSection,
  Footer,
  WhatsAppButton,
} from "@/components/landing";

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
