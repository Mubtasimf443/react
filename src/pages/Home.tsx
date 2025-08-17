/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import AboutSection from "../components/sections/AboutSection"
import ContactSection from "../components/sections/ContactSection"
import HeroSection from "../components/sections/HeroSection"
import ProjectsSection from "../components/sections/ProjectsSection"
import SkillsSection from "../components/sections/SkillsSection"




const HomePage = () => {
    return (
        <>
            <HeroSection />
            <SkillsSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
        </>
    )
}

export default HomePage
