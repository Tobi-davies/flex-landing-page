import { media } from "../../../mocks";
import { featuresList } from "../../../mocks";

const Features = () => {
  const { shared } = media;
  return (
    <div
      style={{
        backgroundImage: `url(
            ${shared.bgPattern}
          )`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "contain",
      }}
      className="bg-greyBg"
    >
      <div className="max-w-128 mx-auto px-5 pt-10 pb-10 md:px-10 md:pt-20 md:pb-20 text-center">
        <span className="text-[10px] text-green bg-lightGreen py-px px-1.5 rounded-3xl">
          FEATURES
        </span>
        <h2 className="text-center text-3xl font-bold text-secondaryText mb-3 mt-2">
          Gain more insight into how people use your
        </h2>
        <p className="text-center max-w-[830px] mx-auto text-base md:text-lg font-medium text-primaryText mb-14">
          With our integrated CRM, project management, collaboration and
          invoicing capabilities, you can manage every aspect of your business
          in one secure platform.
        </p>

        {/* <div className="flex flex-wrap gap-y-10 border border-red-300">
          {featuresList.map((featureItem, i) => {
            return (
              <div
                key={i}
                className="flex flex-col items-center w-full md:w-6/12 lg:w-4/12 border border-red-300"
              >
                <figure className="mb-3">
                  <img src={featureItem.image} alt={featureItem.title} />
                </figure>
                <h3 className="text-xl text-secondaryText font-bold mb-2 text-center">
                  {featureItem.title}
                </h3>
                <p className="text-sm font-medium text-primaryText text-center w-[253px]">
                  {featureItem.description}
                </p>
              </div>
            );
          })}
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10">
          {featuresList.map((featureItem, i) => {
            return (
              <div key={i} className="flex flex-col items-center w-full">
                <figure className="mb-3">
                  <img
                    src={featureItem.image}
                    alt={featureItem.title}
                    width="80%"
                  />
                </figure>
                <h3 className="text-xl text-secondaryText font-bold mb-2 text-center">
                  {featureItem.title}
                </h3>
                <p className="text-sm font-medium text-primaryText text-center w-[350px] md:w-[253px] ">
                  {featureItem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
