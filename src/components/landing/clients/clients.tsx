import { media } from "../../../mocks";
import { clientsList } from "../../../mocks";

const Clients = () => {
  const { shared } = media;
  return (
    <div
      style={{
        backgroundImage: `url(
            ${shared.clientsBg}
          )`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "75%",
      }}
      className="bg-greyBg"
    >
      <div className="max-w-128 mx-auto px-5 pt-10 pb-10 md:px-10 md:pt-20 md:pb-20 text-center">
        <span
          className="text-[10px] text-green bg-lightGreen py-px px-1.5 rounded-3xl"
          data-animation="header"
        >
          OUR CLIENTS
        </span>
        <h2
          className="text-center text-4xl font-bold text-secondaryText mb-3 mt-3"
          data-animation="header"
        >
          Trusted by the top companies in this industry
        </h2>
        <p
          className="text-center max-w-[830px] mx-auto text-base font-medium text-primaryText mb-8"
          data-animation="paragraph"
        >
          The only SaaS business platform that combines CRM, marketing
          automation & commerce.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientsList.map((client, i) => (
            <div
              key={i}
              className="flex justify-center py-8 bg-white rounded-md"
            >
              <figure>
                <img src={client.image} alt="client" />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
