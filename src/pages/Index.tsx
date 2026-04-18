import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Team from "@/components/Team";
import Insights from "@/components/Insights";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <Hero />
    <TrustBar />
    <Services />
    <Industries />
    <Process />
    <WhyChooseUs />
    <Team />
    <Insights />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
