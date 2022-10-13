import { media } from "./media.mock";

const {
  landing: { features },
} = media;

export const featuresList = [
  {
    image: features.measurePerformance,
    title: "Measure your performance",
    description:
      "Stay connected with your team and make quick decisions wherever you are.",
  },
  {
    image: features.customAnalytics,
    title: "Custom analytics",
    description:
      "Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place.",
  },
  {
    image: features.team,
    title: "Team Management",
    description:
      "Our calendar lets you know what is happening with customer and projects so you",
  },
  {
    image: features.buildWebsite,
    title: "Build your website",
    description:
      "A tool that lets you build a dream website even if you know nothing about web design or programming.",
  },
  {
    image: features.connectApps,
    title: "Connect multiple apps",
    description:
      "The first business platform to bring together all of your products from one place.",
  },
  {
    image: features.easySetup,
    title: "Easy setup",
    description:
      "End to End Business Platform, Sales Management, Marketing Automation, Help Desk",
  },
];
