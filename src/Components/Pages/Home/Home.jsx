import AboutSection from "./AboutSection";
import AdmissionsSection from "./AdmissionsSection";
import Banner from "./Banner";
import ServicesSection from "./ServicesSection";
import StudentLifeSection from "./StudentLifeSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutSection />
      <ServicesSection />
      <StudentLifeSection />
      <AdmissionsSection />
    </div>
  );
}
