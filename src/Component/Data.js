import React from "react";
// import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },

  {
    id: 3,
    url: "/blog",
    text: "Blog",
  },
];

export const loginIcons = [
  {
    id: 1,
    icon: <FiLogIn />,
    text: "Login",
  },
  {
    id: 2,
    icon: <BiLogOut />,
    text: "Logout",
  },
];

// Hero section
export const homeHero = {
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  headline: "Discover interesting tech content",
  description: "A hub for everything frontend, backend & devOps",
  startBtn: "Get Started",
  readBtn: "Read Post",
  imgStart: "",
};
