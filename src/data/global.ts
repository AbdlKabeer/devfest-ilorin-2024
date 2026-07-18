import twitter from "@public/icons/twitter.svg";
import ig from "@public/icons/ig.svg";
import fb from "@public/icons/fb.svg";
import linkedin from "@public/icons/linkedin.svg";
import { CtaLinks, SocialLinks, MenuItem } from "@/types";

export const socialLinks: SocialLinks[] = [
  {
    icon: twitter,
    link: "https://x.com/gdgoc_unilorin",
  },
  {
    icon: ig,
    link: "https://instagram.com/gdgoc_unilorin",
  },
  {
    icon: fb,
    link: "https://www.facebook.com/groups/gdgunilorin",
  },
  {
    icon: linkedin,
    link: "https://www.linkedin.com/company/gdg-on-campus-university-of-ilorin",
  },
];

export const menuLinks: MenuItem[] = [
  {
    title: "Get DP",
    path: "/get-dp",
  },
  {
    title: "Speakers",
    path: "/speakers",
  },
  // {
  //   title: "Schedule",
  //   path: "/schedule",
  // },
  // {
  //   title: "Sponsors",
  //   path: "/sponsors",
  // },
  {
    title: "Team",
    path: "/team",
  },
];

export const newMenuLinks: MenuItem[] = [
  {
    title: "Get DP",
    path: "/get-dp",
    isExternal: false,
  },
  // {
  //   title: "Team",
  //   path: "/team",
  //   isExternal: false,
  // },
  {
    title: "Speakers",
    path: "/speakers",
  },
  {
    title: "Team",
    path: "/team",
  },
  // {
  //   title: "Videos",
  //   path: "/videos",
  //   isExternal: true,
  // },
  // {
  //   title: "Join community for 2025",
  //   path: "https://gdg.community.dev/gdg-ilorin/",
  //   isExternal: true,
  // },
];

export const ctaLinks: Record<string, CtaLinks> = {
  workshop: {
    title: "Workshop",
    link: "https://calendar.app.google/ugeZZoJKYyuZYUBL8",
    isExternal: true,
  },
  register: {
    title: "R⁠egister",
    link: "https://bit.ly/Lets-Build-With-AI",
    isExternal: true,
  },
  speak: {
    title: "⁠Apply to Speak",
    link: "https://forms.gle/d7YcttdJsfGEzmTZ6",
    isExternal: true,
  },
  sponsor: {
    title: "⁠Sponsor Us",
    link: "https://bit.ly/bwai-sponsor",
    isExternal: true,
  },
  partner: {
    title: "⁠⁠Partner with Us",
    link: "mailto:unilorindsc@gmail.com",
    isExternal: true,
  },
  ticket: {
    title: "Get Ticket",
    link: "https://bit.ly/Lets-Build-With-AI",
    isExternal: true,
  },
  calendar: {
    title: "Add event to Google Calendar",
    link: "https://calendar.app.google/ugeZZoJKYyuZYUBL8",
    isExternal: true,
  },
  event: {
    title: "Event Page",
    link: "https://bit.ly/Lets-Build-With-AI",
    isExternal: true,
  },
  dayTwo: {
    title: "Day Two",
    link: "https://calendar.app.google/jUpUnQbgRRsk4HPm8",
    isExternal: true,
  },
  dayThree: {
    title: "Day Three",
    link: "https://calendar.app.google/wMRNe6Tsb5LUWMky5",
    isExternal: true,
  }, //https://calendar.app.google/ZYRbT3v97xrCxF7a6
};
