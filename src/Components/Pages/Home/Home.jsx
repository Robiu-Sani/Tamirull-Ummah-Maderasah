import AboutSection from "./AboutSection";
import AdmissionsSection from "./AdmissionsSection";
import Banner from "./Banner";
import ImageGallery from "./ImageGallery";
import LibraryAndOnlineLearningSection from "./LibraryAndOnlineLearningSection";
import ServicesSection from "./ServicesSection";
import StudentLifeSection from "./StudentLifeSection";
import Testimonial from "./Testimonial";
import VideoGallery from "./VideoGallery";

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutSection />
      <ServicesSection />
      <StudentLifeSection />
      <AdmissionsSection />
      <LibraryAndOnlineLearningSection />
      <ImageGallery />
      <VideoGallery />
      <Testimonial />
    </div>
  );
}
