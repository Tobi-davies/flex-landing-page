import { media, navLinks, socials } from "../../mocks";

const Footer = () => {
  const {
    landing: { footer },
    shared,
  } = media;
  const { footerLinks } = navLinks;
  return (
    <div
      className="bg-secondaryText py-10 md:py-16"
      style={{
        backgroundImage: `url(
          ${shared.footerPattern}
        )`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "contain",
      }}
    >
      <div className="max-w-128 mx-auto px-5 md:px-10">
        <div className="mb-1 flex justify-center md:justify-start md:mb-3">
          <figure>
            <img src={footer.logo} alt="logo" />
          </figure>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-9/12 pt-3">
            <p className="text-base font-medium text-white mb-3 max-w-md mx-auto text-center md:text-start md:mx-0 md:max-w-sm md:mb-10">
              Launch your own Software As A Service Application with Flex
              Solutions.
            </p>

            {/* footer links */}
            <ul className="flex flex-col items-center gap-x-6 gap-y-3 justify-center sm:flex-row sm:flex-wrap sm:items-start md:gap-y-1 md:justify-start md:gap-7 lg:gap-11">
              {footerLinks.map((link, i) => {
                return (
                  <li key={i} className="text-lightGrey font-medium text-sm">
                    {link.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-full flex flex-row items-end gap-5 mt-5 justify-center md:w-3/12 md:flex-col md:justify-start md:pr-8 md:mt-0">
            <figure>
              <img src={footer.playStore} alt="google play" width="150px" />
            </figure>
            <figure>
              <img src={footer.appStore} alt="app store" width="150px" />
            </figure>
          </div>
        </div>
      </div>

      {/* section divider */}
      <div className="bg-secBtnText h-px my-7 md:my-10"></div>
      <div className="max-w-128 mx-auto flex flex-col-reverse items-center md:flex-row justify-between px-5 md:px-10">
        <p className="text-lightGrey text-sm">
          © 2021 Flex. All rights reserved.
        </p>

        {/* social media icons */}
        <div className="flex gap-8 mb-3 md:mb-0">
          {socials.map((icon, i) => {
            return (
              <a href="/" key={i} className="cursor-pointer">
                <img src={icon.image} alt={icon.name} width="20px" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
