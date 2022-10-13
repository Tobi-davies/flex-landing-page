interface NavLink {
  title: string;
  url: string;
}

const headerLinks: NavLink[] = [
  {
    title: "Product",
    url: "/",
  },
  {
    title: "Features",
    url: "/",
  },
  {
    title: "Pricing",
    url: "/",
  },
  {
    title: "Resources",
    url: "/",
  },
];

const footerLinks: NavLink[] = [
  {
    title: "Product",
    url: "/",
  },
  {
    title: "Features",
    url: "/",
  },
  {
    title: "Pricing",
    url: "/",
  },
  {
    title: "Resources",
    url: "/",
  },
  {
    title: "Careers",
    url: "/",
  },
  {
    title: "Help",
    url: "/",
  },
  {
    title: "Privacy",
    url: "/",
  },
];

export const navLinks = {
  headerLinks,
  footerLinks,
};
