import HomeSection from "../Components/HomeSections/HomeSection";
import AboutSection from "../Components/HomeSections/AboutSection";
import ProjectsSection from "../Components/HomeSections/ProjectsSection";
import SkillsSection from "../Components/HomeSections/SkillsSection";
import ContactsSection from "../Components/HomeSections/ContactsSection";

export default function HomeEN() {
  return (
    <>
      <main>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactsSection />
      </main>
    </>
  );
}
