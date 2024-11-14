'use client'

// import Image from "next/image";
// import TypingEffect from "../public/components/typewriter";
// import Typewriter from 'typewriter-effect';
// import Link from 'next/link';
// import { Tag } from  "../public/components/tag";
import { Education } from "../public/pages/education";
import { FrontPage } from "../public/pages/frontPage";
import { Experience } from "../public/pages/experience";
import { Interests } from "../public/pages/interests";
import { TestPage } from "../public/pages/testPage";
import { ThemeButton } from "@/public/components/themeButton";

import { ScrollableSite } from "../public/pages/scrollableSite";
import { NavMenu } from "@/public/components/navMenu";

// import { Tag } from  '../public/components/tag';
// import profilePicture from "/assets/Jakin.webp";
// import linkedinLogo from "/assets/LinkedinLogo.png";
// import githubLogo from "/assets/GithubLogo.png";
// import emailLogo from "/assets/EmailLogo.png";
// import instagramLogo from "/assets/InstagramLogo.png";
// import UCR from "/assets/UCR.jpg"

// import profilePicture from "/site/assets/Jakin.webp";
// import linkedinLogo from "/site/assets/LinkedinLogo.png";
// import githubLogo from "/site/assets/GithubLogo.png";
// import emailLogo from "/site/assets/EmailLogo.png";
// import instagramLogo from "/site/assets/InstagramLogo.png";
// import UCR from "/site/assets/UCR.png";

export default function Home() {
  return (
    <main className="bg-background">
      {/* <NavMenu/> */}
      <ScrollableSite/>
      {/* <ThemeButton/>
      <FrontPage/>
      <Education/>
      <Experience/>
      <Interests/> */}
      {/* <TestPage/> */}
    </main>
  );
}