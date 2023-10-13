import Contact from "@/components/Home/Contact/Contact";
import HeroSection from "@/components/Home/HeroSection";
import Projects from "@/components/Home/Projects/Projects";
import Skills from "@/components/Home/Skills/Skills";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="mt-20 w-full space-y-32">
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
};

export default Home;
