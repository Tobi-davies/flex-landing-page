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
        <div className="max-w-128 mx-auto px-5 pt-14 pb-52 md:px-10 md:pt-20">
          <div className="max-w-lg md:max-w-[650px] mx-auto pb-10">
            <h1 className="text-4xl text-secondaryText text-center font-bold leading-none mb-4 lg:text-[3.2rem]">
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
      <div className="bg-white relative px-10 pb-96">
        <div className="absolute top-[-200px] left-[50%] ml-[-450px] mx-auto w-full md:w-[900px] pb-14">
          <img
            src={hero.main}
            alt="hero-image"

            //   height="auto" width="500px"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
