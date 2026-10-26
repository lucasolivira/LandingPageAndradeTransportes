import { LazyMotion, MotionConfig } from "framer-motion";
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

const loadMotionFeatures = () =>
  import("@/components/landing/motion-features").then((res) => res.default);

const Index = () => {
  return (
    <LazyMotion features={loadMotionFeatures} strict>
      <MotionConfig reducedMotion="user">
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
      </MotionConfig>
    </LazyMotion>
  );
};

export default Index;
