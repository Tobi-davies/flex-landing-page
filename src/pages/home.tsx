import Cta from "../components/landing/cta/cta";
import Hero from "../components/landing/hero/hero";
import Quotes from "../components/landing/quotes/quotes";
import Clients from "../components/landing/clients/clients";
import Features from "../components/landing/features/features";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Clients />
      <Quotes />
      <Cta />
    </>
  );
};

export default Home;
