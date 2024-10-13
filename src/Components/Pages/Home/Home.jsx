import AboutSection from "./AboutSection";
import AdmissionsSection from "./AdmissionsSection";
import Banner from "./Banner";
import ServicesSection from "./ServicesSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutSection />
      <ServicesSection />
      <AdmissionsSection />
    </div>
  );
}
