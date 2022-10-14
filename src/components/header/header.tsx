import React from "react";
import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { media, navLinks } from "../../mocks";
import Button from "../../shared/button/button";

const Header = () => {
  const {
    landing: { header },
  } = media;

  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const { headerLinks } = navLinks;

  const lockScroll = React.useCallback(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      <div className="bg-greyBg">
        <div className="max-w-128 mx-auto px-5 md:px-9 py-4 flex items-center justify-between">
          {/* LOGO */}
          <img src={header.logo} alt="logo" />
          {/* NAV LINKS */}
          <ul className="hidden md:flex gap-10">
            {headerLinks.map((navItem, i) => {
              return (
                <li key={i}>
                  <a href="#" className="text-sm text-primaryText font-medium">
                    {navItem.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="hidden md:flex gap-6 items-center">
            <span className="text-sm text-primaryText font-medium">Log in</span>
            <Button type="primary" className="text-xs px-3 py-2">
              Sign up
            </Button>
          </div>

          {/* mobile menu */}
          <GiHamburgerMenu
            className="text-2xl md:hidden"
            cursor="pointer"
            onClick={() => {
              setIsMobile(true);
              lockScroll();
            }}
          />
        </div>
      </div>

      {isMobile && <MobileNav setIsMobile={setIsMobile} />}
    </>
  );
};

export default Header;

//Mobile nav
export function MobileNav({ setIsMobile }: any) {
  const unlockScroll = React.useCallback(() => {
    document.body.style.overflow = "";
  }, []);
  const {
    landing: { header },
  } = media;
  const { headerLinks } = navLinks;

  return (
    <div
      className="fixed top-0 left-0 z-10 h-screen w-screen md:hidden bg-white"
      style={{ transition: "opacity 5s ease" }}
    >
      <div className="px-5 py-4 flex items-center justify-between">
        <img src={header.logo} alt="logo" />
        <CgClose
          className="text-2xl"
          onClick={() => {
            setIsMobile(false);
            unlockScroll();
          }}
        />
      </div>
      <div>
        <ul className="flex flex-col items-center gap-10 my-10">
          {headerLinks.map((navItem, i) => {
            return (
              <li key={i}>
                <a href="#" className="text-base text-primaryText font-medium">
                  {navItem.title}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col gap-10 items-center">
          <span className="text-sm text-primaryText font-medium">Log in</span>
          <Button type="primary" className="text-base px-6 py-3">
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
}
