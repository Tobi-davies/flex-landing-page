import Hero from "../components/landing/hero/hero";
import Clients from "../components/landing/clients/clients";
import Features from "../components/landing/features/features";
import Cta from "../components/landing/cta/cta";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Clients />
      <Cta />
    </>
  );
};

export default Home;
