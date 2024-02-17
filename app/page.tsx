'use client'

import Image from "next/image";
import TypingEffect from "../public/components/typewriter";
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import { Tag } from  "../public/components/tag";
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


// export type Props = {
//   text: string;
// }

// const Tag: React.FC<Props> = ({ text }: Props) => {
//   return (
//       <div className="rounded-lg bg-blue-500 text-white shadow-md font-medium mr-1 mb-1 inline-block p-1">
//         {text}
//       </div>
//   );
// };

export default function Home() {
  return (
    <main className="bg-black">
      <div className="grid grid-wrap h-screen grid-cols-2 vertical-align justify-center items-center">
        <div className="flex flex-wrap flex-none flex-col order-2 lg:order-1 h-2/3 justify-center items-start text-6xl proxima font-bold bg-blue-300 box-content h-50 w-100 border-1 my-8 mx-8 shadow m4 rounded-xl /*hover:animate-pulse*/">
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
                    src="https://cdn.discordapp.com/attachments/1207549973063794700/1207550401302237204/LinkedinLogo.png?ex=65e00df2&is=65cd98f2&hm=9840ee7eb8866bfebba2a8b82ae2e784339dcad8e36c4d27513b8dafaa6edac6&"
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
                    src="https://cdn.discordapp.com/attachments/1207549973063794700/1207550083311206460/GithubLogo.png?ex=65e00da7&is=65cd98a7&hm=40151a9cb075a74b4261bd2292b14536b9e316926ab6b3113b838753e89b32aa&"
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
                    src="https://cdn.discordapp.com/attachments/1207549973063794700/1207550083072008212/EmailLogo.png?ex=65e00da7&is=65cd98a7&hm=65d8abfe2aba4fa693bd1bb750530c37c3d6abb49ce52b24a3838c8129ee2332&"
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
                    src="https://cdn.discordapp.com/attachments/1207549973063794700/1207550017007657010/InstagramLogo.png?ex=65e00d97&is=65cd9897&hm=a618f79cb21bb005c050bcb5b5df69e4587968e91b959e116c0a1c4704168446&"
                    alt="InstagramLogo"
                    width={50}
                    height={50}
                    priority
                  />              
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap flex-col order-1 lg:order-2 h-screen justify-center items-center">
            <Image
              src="https://cdn.discordapp.com/attachments/1207549973063794700/1207551334262374400/jakin.webp?ex=65e00ed1&is=65cd99d1&hm=2e7423384a1bc94f693b5bca415402c604e0e710f9ecf81cd2f09ba59cd0c23d&"
              width={500}
              height={500}
              alt="jakin image"
              bg-color="green"
            />
          </div>
        </div>

      <div className=" h-screen">
        <div className="w-full self-center text-center font-extrabold text-4xl">
          Education
        </div>
        <div className="flex justify-center mb-4">
          <div className="perspective-1000 group cursor-pointer h-40 w-1/2 items-center"> {/*Start*/}
            <div className="relative transform-style-3d transition-transform duration-1000 transform text-white group-hover:rotate-y-180">
              <div className="backface-hidden absolute w-full h-full rotate-y-0 "> {/*End*/}
                <div className="flex flex-none flex-wrap rounded-lg display:block w-full shadow-lg h-40 bg-green-200">
                  <div className="self-center m-2">
                    <Image
                      className="rounded-lg"
                      src="https://cdn.discordapp.com/attachments/1207549973063794700/1207550016802267136/UCR.jpg?ex=65e00d97&is=65cd9897&hm=84c51cfcd1dec33b5dac9df851fc2b3388b625fe03f2eb1b56c8ffcda7c0208a&"
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
                      MS in Compututer Science
                    </div>
                    <div className="text-black ml-2">
                      March 2024
                    </div>
                  </div>
                </div>
              </div>
              <div className="backface-hidden absolute w-full h-40 rotate-y-180">
                <div className="flex flex-none flex-wrap rounded-lg bg-green-200 display:block w-full shadow-lg">
                  <div className="self-center  m-2">
                    <div className="text-black ml-2 font-bold">
                      Relevant Coursework:
                    </div>
                    <div className="text-black ml-1 mb-2">
                      <Tag text="Advanced Computer Architecture"/>
                      <Tag text="Advanced Software Testing and Analysis"/> 
                      <Tag text="Big Data Management"/>
                      <Tag text="Database Management Systems"/>
                      <Tag text="Data Mining Techniques"/>
                      <Tag text="Design and Analysis of Algorithms"/>  
                      <Tag text="Fundamentals of Machine Learning"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <div className="perspective-1000 group cursor-pointer h-40 w-1/2 items-center"> {/*Start*/}
            <div className="relative transform-style-3d transition-transform duration-1000 transform text-white group-hover:rotate-y-180">
              <div className="backface-hidden absolute w-full h-full rotate-y-0 "> {/*End*/}
                <div className="flex flex-none flex-wrap rounded-lg bg-green-200 display:block w-full shadow-lg ">
                  <div className="self-center m-2 ">
                    <Image
                      className="rounded-lg"
                      src="https://cdn.discordapp.com/attachments/1207549973063794700/1207550016802267136/UCR.jpg?ex=65e00d97&is=65cd9897&hm=84c51cfcd1dec33b5dac9df851fc2b3388b625fe03f2eb1b56c8ffcda7c0208a&"
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
                      BS in Compututer Science
                    </div>
                    <div className="text-black ml-2">
                      March 2023
                    </div>
                  </div>
                </div>
              </div>
              <div className="backface-hidden absolute w-full h-40 rotate-y-180">
                <div className="flex flex-none flex-wrap rounded-lg bg-green-200 display:block w-full shadow-lg h-40">
                  <div className="self-start m-2">
                    <div className="text-black ml-2 font-bold">
                      Relevant Coursework:
                    </div>
                    <div className="text-black ml-1 mb-2">
                      <Tag text="Algorithm Engineering"/>
                      <Tag text="Concurrent Programming and Parallel Systems"/>
                      <Tag text="Database Management Systems"/>
                      <Tag text="Artificial Intelligence"/>
                    </div>
                  </div>
                </div>
              </div>
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