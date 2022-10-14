import { media } from "../../../mocks";
import Button from "../../../shared/button/button";

const Hero = () => {
  const {
    landing: { hero },
    shared,
  } = media;
  return (
    <>
      <div
        style={{
          backgroundImage: `url(
          ${shared.bgPattern}
        )`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "cover",
        }}
        className="bg-greyBg"
      >
        <div className="max-w-128 mx-auto px-5 pt-14 pb-32 sm:pb-44 md:pb-52 md:px-10 md:pt-18">
          <div className="max-w-lg md:max-w-[650px] mx-auto pb-10 text-center">
            <span className="hidden text-[10px] bg-green text-lightGreen py-px px-1.5 rounded-3xl md:inline-block">
              HEADER
            </span>
            <h1 className="text-4xl text-secondaryText text-center font-bold leading-none mb-4 lg:text-[3.2rem] md:mt-3">
              A small business is only as good as its tools.
            </h1>
            <p className="text-base text-primaryText text-center font-medium mb-4 md:text-lg">
              We’re different. Flex is the only saas business platform that lets
              you run your business on one platform, seamlessly across all
              digital channels.
            </p>
            <div className="flex items-center justify-center gap-3">
              <>
                <Button type="primary" className="text-sm px-4 py-3">
                  Request a Demo
                </Button>
                <Button type="secondary" className="text-sm px-4 py-3">
                  Sign Up
                </Button>
              </>
            </div>
          </div>
        </div>
      </div>

      {/* DEMO VIDEO */}
      <div className="bg-white relative px-10 pb-[150px] sm:pb-[280px] md:px-10 md:pb-[340px]">
        <div className="absolute top-[-100px] sm:top-[-170px] md:top-[-200px] left-[20px] right-[20px]">
          <figure className="flex justify-center">
            <img src={hero.main} alt="hero-image" width="800px" />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Hero;
