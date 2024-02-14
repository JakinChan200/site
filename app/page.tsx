'use client'

import Image from "next/image";
import TypingEffect from "../public/components/typewriter";
import Typewriter from 'typewriter-effect';
import Link from 'next/link'; 
import { Tag } from  '../public/components/tag';
// import { Tag } from 'site/components/tag';


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
    <main className="bg-black">
      <div className="grid h-screen grid-cols-2 vertical-align justify-center items-center">
        <div className="flex flex-wrap flex-col order-1 h-2/3 justify-center items-start text-6xl proxima font-bold bg-blue-300 box-content h-50 w-100 border-1 my-8 mx-8 shadow m4 rounded-xl /*hover:animate-pulse*/">
          <div className="self-center w-4/10">
            <div className="text-6xl font-bold display:block">
              Jakin Chan
            </div>
            <br />
            <div className="text-xl display:block">
              <Typewriter
                  options={{
                  strings: ['Student', 'Cool Kid', 'Very Cool Kid'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <br />
            <div className="font-bold rounded-full bg-white flex items-center justify-center font-mono w-5 pl-10"></div>
              <Link href="https://www.linkedin.com/in/jakin200/" passHref={true}>
                <button className="transition hover:-translate-y-2">
                  <Image
                    className="rounded-full shadow-lg bg-transparent mr-4"
                    src="/site/assets/LinkedinLogo.png"
                    alt="LinkedIn Logo"
                    width={50}
                    height={50}
                    priority
                  />              
                </button>
              </Link>
              <Link href="https://github.com/JakinChan200" passHref={true}>
                <button className="transition hover:-translate-y-2">
                  <Image
                    className="rounded-full shadow-lg bg-transparent mr-4"
                    src="/site/assets/GithubLogo.png"
                    alt="Github Logo"
                    width={50}
                    height={50}
                    priority
                  />
                </button>
              </Link>
              <Link href="mailto:JakinChan200@gmail.com" passHref={true}>
                <button className="transition hover:-translate-y-2">
                  <Image
                    className="rounded-full shadow-lg bg-transparent mr-4"
                    src="/site/assets/EmailLogo.png"
                    alt="EmailLogo"
                    width={50}
                    height={50}
                    priority
                  />              
                </button>
              </Link>
              <Link href="https://www.instagram.com/jakinc200/?hl=en" passHref={true}>
                <button className="transition hover:-translate-y-2">
                  <Image
                    className="rounded-full shadow-lg bg-transparent mr-4"
                    src="/site/assets/InstagramLogo.png"
                    alt="InstagramLogo"
                    width={50}
                    height={50}
                    priority
                  />              
                </button>
              </Link>
            </div>
          </div>
          <div className="flex order-2 h-screen justify-center items-center">
            <Image
              src="/site/assets/Jakin.webp"
              width={500}
              height={500}
              alt="jakin image"
              bg-color="green"
            />
        </div>
      </div>
      
      <div className="flex flex-wrap flex-col justify-center items-center">
        <div className="w-3/4 bg-blue-200 self-center">
          Education
        </div>
        <div className="flex flex-none flex-wrap rounded-lg bg-green-200 display:block w-3/4 shadow-lg m-4">
          <div className="self-center m-2">
            <Image
              className="rounded-lg"
              src="/site/assets/UCR.jpg"
              width={250}
              height={250}
              alt="jakin image"
              priority
            />
          </div>
          <div className="flex flex-wrap flex-col">
            <div className="font-bold sans-serif text-black w-full mt-2 ml-2">
              University of California, Riverside
            </div>
            <div className="text-black ml-2">
              MS in Compututer Science March 2024
            </div>
            <br />
            <div className="text-black ml-2 font-bold">
              Relevant Coursework:
            </div>
            <div className="text-black ml-1 mb-2">
              <Tag text="Algorithm Analysis"/>
              <Tag text="Big Data Management"/>
              <Tag text="Intro to Machine Learning"/>
            </div>
          </div>
        </div>
        <div className="flex flex-none flex-wrap rounded-lg bg-green-200 display:block w-3/4 shadow-lg m-4">
          <div className="self-center m-2">
            <Image
              className="rounded-lg"
              src="/site/assets/UCR.jpg"
              width={250}
              height={250}
              alt="jakin image"
              priority
            />
          </div>
          <div className="flex flex-wrap flex-col">
            <div className="font-bold sans-serif text-black w-full mt-2 ml-2">
              University of California, Riverside
            </div>
            <div className="text-black ml-2">
              BS in Compututer Science March 2023
            </div>
            <br />
            <div className="text-black ml-2 font-bold">
              Relevant Coursework:
            </div>
            <div className="text-black ml-2 mb-2">
              BS in Compututer Science  
            </div>
          </div>
        </div>
      </div>
      <button className="dark:md:hover:bg-fuchsia-600">
          Save changes
      </button>
    </main>
  );
}