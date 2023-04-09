import { media } from "../../../mocks";

const Quotes = () => {
  const {
    landing: { testimonial },
  } = media;
  return (
    <div className="bg-secondaryText">
      <div className="max-w-128 mx-auto px-5 pt-10 pb-10 md:px-10 md:pt-14 md:pb-14">
        <div className="px-0 sm:px-5 md:px-10 text-center">
          <div
            className="max-w-[840px] mx-auto px-1 sm:px-5 md:px-10"
            style={{
              backgroundImage: `url(
          ${testimonial.leftQuote}
        ), url(
          ${testimonial.rightQuote}
        )`,
              backgroundPosition: "top left, right bottom",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100px",
            }}
          >
            <span className="text-[10px] text-green bg-lightGreen py-px px-1.5 rounded-3xl">
              QUOTES
            </span>
            <div
              className="text-2xl md:text-4xl text-white font-semibold pb-4 mt-1 md:leading-10"
              // data-aos="fade-up"
              // data-aos-duration="800"
              // data-aos-once="true"
              data-animation="header"
            >
              The best solution for anyone who wants to work a flexible schedule
              but still earn a full-time income.
            </div>
          </div>
          <figure className="flex justify-center py-5">
            <img src={testimonial.headshot} alt="Darren Dunlap" />
          </figure>
          <p
            className="text-base font-semibold text-white"
            // data-aos="fade-up"
            // data-aos-duration="800"
            // data-aos-once="true"
            // data-aos-delay="100"
            data-animation="header"
          >
            Darren Dunlap
          </p>
          <p
            className="text-sm text-darkGrey"
            // data-aos="fade-up"
            // data-aos-duration="800"
            // data-aos-once="true"
            // data-aos-delay="150"
            data-animation="header"
          >
            CEO & Founder at Flex.co
          </p>
          <div className="flex justify-center gap-3 mt-5">
            <div className="h-2.5 w-2.5 bg-[#404F65] rounded-full"></div>
            <div className="h-2.5 w-2.5 bg-green rounded-full"></div>
            <div className="h-2.5 w-2.5 bg-[#404F65] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
