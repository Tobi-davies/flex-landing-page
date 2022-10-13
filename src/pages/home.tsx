import Hero from "../components/landing/hero/hero";
import Clients from "../components/landing/clients/clients";
import Features from "../components/landing/features/features";
import Cta from "../components/landing/cta/cta";
import Testimonial from "../components/landing/testimonial/testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Clients />
      <Testimonial />
      <Cta />
    </>
  );
};

export default Home;
