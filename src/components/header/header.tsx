import React from "react";
import { media, navLinks } from "../../mocks";
import Button from "../../shared/button/button";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const {
    landing: { header },
  } = media;
  const { headerLinks } = navLinks;
  return (
    <div className="bg-greyBg">
      <div className="max-w-128 mx-auto px-9 py-3 border border-slate-300 flex items-center justify-between">
        <img src={header.logo} alt="logo" />
        <ul className="hidden md:flex gap-10">
          {headerLinks.map((navItem, i) => {
            return (
              <li>
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
        <GiHamburgerMenu className="text-2xl md:hidden" />
      </div>
    </div>
  );
};

export default Header;
