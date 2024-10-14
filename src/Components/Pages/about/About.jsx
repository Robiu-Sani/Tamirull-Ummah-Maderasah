import AboutOurMadrasah from "./AboutOurMadrasah";
import IslamicJourney from "./IslamicJourney";
import MadrasahOverview from "./MadrasahOverview";
import NurturingScholars from "./NurturingScholars";
import OurLegacy from "./OurLegacy";
import PathToKnowledge from "./PathToKnowledge";

export default function About() {
  return (
    <div className="w-full mt-[220px]">
      <div className="container mx-auto ">
        <OurLegacy />
        <MadrasahOverview />
        <PathToKnowledge />
        <IslamicJourney />
        <NurturingScholars />
        <AboutOurMadrasah />
      </div>
    </div>
  );
}
