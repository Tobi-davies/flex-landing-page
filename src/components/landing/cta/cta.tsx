import { media } from "../../../mocks";
import Button from "../../../shared/button/button";

const Cta = () => {
  const { shared } = media;
  return (
    <div
      className="py-10"
      style={{
        background:
          "linear-gradient(to bottom,  #fff 0%,#fff 50%,#22C55E 50%,#22C55E 100%)",
      }}
    >
      <div className="max-w-128 mx-auto px-5 md:px-10">
        <div
          className="bg-darkBg rounded-md px-7  py-6 flex flex-col gap-4 items-center justify-between sm:px-14 lg:flex-row md:px-24 md:py-12 lg:gap-0"
          style={{
            backgroundImage: `url(
            ${shared.ctaPattern}
          )`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full lg:w-6/12 flex flex-col gap-2">
            <h3
              className="text-2xl md:text-3xl text-center font-semibold md:font-bold text-white lg:max-w-sm lg:text-start"
              // data-aos="fade-up"
              // data-aos-duration="800"
              // data-aos-once="true"\
              data-animation="header"
            >
              The fastest way from idea to live site. Period.
            </h3>
            <p
              className="text-sm md:text-base text-center font-medium text-lightGrey lg:max-w-sm lg:text-start"
              // data-aos="fade-up"
              // data-aos-delay="100"
              // data-aos-duration="800"
              // data-aos-once="true"
              data-animation="paragraph"
            >
              Flex is a Small SaaS Business. Flex isn’t a traditional company.
            </p>
          </div>
          <div className="w-full lg:w-6/12 flex gap-6 justify-center lg:justify-end">
            <Button type="primary" className="text-sm px-3 py-3 md:px-4">
              Get Started
            </Button>
            <Button type="secondary" className="text-sm px-3 py-3 md:px-4">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
