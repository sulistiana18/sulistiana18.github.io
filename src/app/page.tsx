import HomeSection from "./component/home/home-section"
import ContactBar from "./component/home/home-section/contact-bar"
import AboutMe from "./component/home/about-me"
import Skills from "./component/home/skills"
import Portfolio from "./component/home/portfolio"
import TechStack from "./component/home/tech-stack"

const Page = () => {
  return (
    <main>
      <HomeSection />
      <ContactBar />
      <AboutMe />
      <Skills />
      <Portfolio />
      <TechStack />
    </main>
  );
};

export default Page;