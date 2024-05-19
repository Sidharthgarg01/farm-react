import FreshProducts from "./components/FreshProducts";
import Hero from "./components/Hero";
import NewlyHarvest from "./components/NewlyHarvest";
import OurLocalFarms from "./components/OurLocalFarms";
import SupportOurFarmer from "./components/SupportOurFarmer";
import Testimonials from "./components/Testimonials";
import WhatsNew from "./components/WhatsNew";

const Home = () => {
  return (
    <>
      <Hero />
      <WhatsNew />
      <SupportOurFarmer />
      <NewlyHarvest />
      <FreshProducts />
      <Testimonials />
      <OurLocalFarms />
    </>
  );
};

export default Home;
