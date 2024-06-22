import About from "./minicomponents/About";
import Contact from "./minicomponents/Contact";
import Hero from "./minicomponents/Hero";
import MyApps from "./minicomponents/MyApps";
import Portfolio from "./minicomponents/Portfolio";
import Skills from "./minicomponents/Skills";
import TimeLine from "./minicomponents/TimeLine";

const Home = () => {
  return (
    <article className="px-5 py-50 mt-10 sm:mt-14 md:mt-16 lg:mt-24 xl:mt-32 sm:mx-auto w-full max-w-[1050px] flex flex-col gap-14">
      <Hero />
      <TimeLine />
      <About />
      <Skills />
      <Portfolio />
      <MyApps />
      <Contact />
    </article>
  );
};

export default Home;
