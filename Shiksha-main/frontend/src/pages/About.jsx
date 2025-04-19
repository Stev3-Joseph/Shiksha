import Header from "../components/Header";
import Footer from "../components/Footer";
const About = () => {
  return (
    <>
      <Header />
      <div className="h-20 bg-white"></div>
      <div className="w-full h-fit flex flex-col items-center justify-center">
        <div className="md:w-3/4 w-full bg-gray-100 p-4 rounded-lg  h-fit md:text-xl text-lg mt-10">
          <h2 className="md:text-2xl text-xl font-bold text-black">
            About us:
          </h2>
          <p className="mt-3">
            We are an innovative team committed to redefining personalized
            learning. Our project administers a single comprehensive assessment
            to students in a classroom setting, utilizing ML-driven analytics to
            evaluate their performance and recommend an optimized learning path.
            This data-driven approach ensures that each student receives
            tailored educational guidance, fostering intellectual growth and
            efficiency in learning.
          </p>
          <p className="mt-3">
            By harnessing the power of intelligent automation and adaptive
            learning, we aim to empower students with the insights and tools
            they need to excel in an ever-evolving academic landscape.
          </p>
        </div>
        <div className="md:w-3/4 w-full bg-white p-4 rounded-lg border-2 border-gray-200 h-fit md:text-lg text-md mt-10">
          <a
            href="https://sdgs.un.org/goals/goal4"
            className="md:text-2xl text-xl font-extrabold text-blue-500 hover:text-blue-700"
          >
            SDG 4 - Quality Education
          </a>
          <img
            src="un-sdg.png"
            alt="UN SDG 4 - Quality Education"
            className="w-full rounded-lg"
          />
          <p className="mt-3">
            Our project aligns with the United Nations Sustainable Development
            Goal 4, which aims to ensure inclusive and equitable quality
            education for all. By leveraging technology and data analytics, we
            seek to bridge the gap between traditional classroom instruction and
            personalized learning, providing students with the tools they need
            to succeed in a rapidly changing world.
          </p>
        </div>
        <div className="md:w-3/4 w-full p-4 gap-4 md:gap-8 md:text-xl text-lg mt-10 border-2 border-gray-200 md:flex-row flex flex-col items-center md:justify-evenly bg-white rounded-lg mb-7">
          <div className="appear-left flex flex-col items-center justify-center gap-3 h-fit w-fit">
            <div className="w-2xs h-2xs bg-linear-to-r/hsl from-blue-500 to-blue-300 rounded-full overflow-hidden ">
              <img src="Darshan.png" alt="Darshan Odedara" className="w-xs" />
            </div>
            <h1 className="font-bold md:text-2xl text-xl">Darshan Odedara</h1>
            <h1 className="text-blue-500 md:text-2xl text-xl">
              Frontend Development
            </h1>
          </div>
          <div className="appear-left flex flex-col items-center justify-center gap-3 h-fit w-fit">
            <div className="w-2xs h-2xs bg-linear-to-r/hsl from-blue-500 to-blue-300 rounded-full overflow-hidden ">
              <img src="Steve.png" alt="Steve Joseph" className="w-xs" />
            </div>
            <h1 className="font-bold md:text-2xl text-xl">Steve Joseph</h1>
            <h1 className="text-blue-500 md:text-2xl text-xl">
              Backend Development
            </h1>
          </div>
          <div className="appear-left flex flex-col items-center justify-center gap-3 h-fit w-fit">
            <div className="w-2xs h-2xs bg-linear-to-r/hsl from-blue-500 to-blue-300 rounded-full overflow-hidden ">
              <img src="Arjun.png" alt="Arjun Avittathur" className="w-xs" />
            </div>
            <h1 className="font-bold md:text-2xl text-xl">Arjun Avittathur</h1>
            <h1 className="text-blue-500 md:text-2xl text-xl">
              Machine Learning
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
