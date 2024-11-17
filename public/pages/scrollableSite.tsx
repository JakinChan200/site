'use client'
/** @type {import('next').NextConfig} */
import React from "react";
import Link from 'next/link'
import Image from "next/image";
import { useState } from 'react';
import { useEffect } from 'react';

export const ScrollableSite: React.FC= () => {
    const [activeSection, setActiveSection] = useState("section1");

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "section1";

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section.id;
        }
      });
  
      setActiveSection(currentSection);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <div className="">
        <div className="fixed flex flex-col *:m-6 *:text-sm *:md:text-2xl items-center justify-center w-1/5 h-4/5 *:cursor-pointer translate-y-20 translate-x-1/4 bg-[#121212] rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-80 border-2 border-black shadow-md">
            <div className="text-center align-middle">
                <Link href="#section1"
                    className={`${
                        activeSection === "section1" ? "text-slate-100 transform scale-125" : "text-slate-600"
                    } hover:text-slate-100 transition-all duration-200 ease-in-out inline-block`}
                    >
                    Introduction
                </Link>
            </div>
            <div className="text-center align-middle">
                <Link href="#section2"
                    className={`${
                        activeSection === "section2" ? "text-slate-100 transform scale-125" : "text-slate-600"
                    } hover:text-slate-100 transition-all duration-200 ease-in-out inline-block`}
                    >
                    Education
                </Link>            
            </div>
            <div className="text-center align-middle">
                <Link href="#section3"
                    className={`${
                        activeSection === "section3" ? "text-slate-100 transform scale-125" : "text-slate-600"
                    } hover:text-slate-100 transition-all duration-200 ease-in-out inline-block`}
                    >
                    Projects
                </Link> 
            </div>
            <div className="text-center align-middle">
                <Link href="#section4"
                    className={`${
                        activeSection === "section4" ? "text-slate-100 transform scale-125" : "text-slate-600"
                    } hover:text-slate-100 transition-all duration-200 ease-in-out inline-block`}
                    >
                    Experience
                </Link> 
            </div>
            <div className="self-center text-center align-middle">
                <Link href="#section5"
                    className={`${
                        activeSection === "section5" ? "text-slate-100 transform scale-125" : "text-slate-600"
                    } hover:text-slate-100 transition-all duration-200 ease-in-out inline-block`}
                    >
                    Section 5
                </Link> 
            </div>
        </div>

        <div className='flex flex-row justify-center *:bg-background'>
            <div className='flex flex-col w-1/4 *:h-screen'>
                <div className=''>
                </div>
            </div>
            <div className="flex flex-col *:h-screen w-3/4 bg-background *:transition-opacity *:ease-in *:duration-200">
                <section id="section1" className={`${ activeSection === "section1" ? "opacity-100" : "opacity-0" } flex flex-col items-center justify-center`}>
                    {/* <h2 className="my-8 text-4xl text-center">Introduction</h2> */}
                    <div className="flex flex-row items-center justify-center w-3/4 h-4/5">
                        <div className="w-3/4 text-2xl tracking-wide text-left h-3/4">
                            <div className="text-4xl text-left">
                                Jakin Chan
                            </div>
                            <br></br><br></br>
                                Hi, I am a recent graduate of the University of California, Riverside.
                            <br></br><br></br>
                                I enjoy learning and applying what i've learned.
                            <br></br><br></br>
                                Thank you.
                            <br></br><br></br>
                            <br></br><br></br>
                            <div className="flex flex-row flex-wrap *:mr-4 *:mb-4 *:size-14 *:bg-[#100000] *:rounded-2xl *:cursor-pointer">
                                {/* <div className="flex items-center justify-center hover:scale-110 group">
                                    <div className="text-4xl group-hover:scale-110 group-hover:inline-block group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-amber-700 group-hover:to-indigo-40 group-hover:bg-clip-text">
                                        X
                                    </div>
                                </div>
                                <div className="flex items-center justify-center hover:scale-110 group">
                                    <div className="text-4xl group-hover:scale-110 group-hover:inline-block group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-amber-700 group-hover:to-indigo-40 group-hover:bg-clip-text">
                                        in
                                    </div>
                                </div> */}
                                <Link className="flex items-center justify-center hover:scale-110 group" href="mailto:JakinChan200@gmail.com" target="_blank" passHref={true}>
                                    <button className="">
                                    <svg width="35" height="35" fill="none" viewBox="0 0 24 24">
                                        <path stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 7 6.2 4.65a3 3 0 0 0 3.6 0L20 7"/>
                                        <rect width="18" height="14" x="3" y="5" stroke="#FFF" stroke-linecap="round" stroke-width="2" rx="2"/>
                                    </svg>   
                                    </button>
                                </Link>
                                <Link className="flex items-center justify-center hover:scale-110 group" href="https://github.com/JakinChan200" target="_blank" passHref={true}>
                                    <button className="">
                                        <svg width="35" height="35" viewBox="0 0 24 24" className="fill-white">
                                            <path d="M4.074 2.994c.059-1.03.305-1.478 1.01-1.838.76-.387 1.957-.207 3.366.507.607.307.669.313 1.732.177 1.414-.181 3.234-.18 4.54.002.986.138 1.05.13 1.66-.177 2-1.013 3.578-.947 4.15.174.286.56.339 2.01.117 3.208-.122.664-.11.747.186 1.182 2.08 3.065.581 8.033-2.982 9.887a6.16 6.16 0 0 1-.69.3c-.575.22-.75.287-.538 1.298.102.486.224 1.695.272 2.686.087 1.792.086 1.805-.228 2.17-.428.498-1.045.506-1.462.02-.273-.317-.3-.466-.3-1.689 0-1.806-.197-3.006-.665-4.035-.557-1.224-.144-1.681 1.128-1.955 1.768-.38 3.15-1.471 3.92-3.096.731-1.545.841-3.68-.482-4.978-.376-.447-.402-.853-.134-2.074.1-.456.185-1.045.188-1.309.003-.416-.035-.479-.29-.479-.162 0-.78.236-1.373.523l-.947.459a.504.504 0 0 1-.277.047 30.339 30.339 0 0 0-7.114 0 .504.504 0 0 1-.279-.046l-.946-.46c-.593-.287-1.211-.523-1.373-.523-.374 0-.38.276-.039 1.916.209 1.001.349 1.224-.253 2.025-.902 1.2-1.127 2.69-.643 4.256.609 1.973 2.101 3.305 4.2 3.75 1.265.268 1.595.618 1.112 2.069-.38 1.14-.62 1.435-1.173 1.435-.743 0-1.209-.644-.953-1.318.113-.297.08-.329-.617-.582-2.126-.776-3.752-2.513-4.495-4.804-.575-1.77-.322-4.075.6-5.467.314-.475.318-.515.172-1.423a10.301 10.301 0 0 1-.1-1.838ZM3.332 15.945a1 1 0 0 0-1.664 1.11c.226.34.497.618.726.848l.124.123c.193.19.363.36.533.56.378.443.754 1.04.968 2.11.096.477.438.734.628.846.206.121.431.193.616.24.379.095.839.145 1.275.174.479.032.998.042 1.462.045a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1h-.304c-.587.002-1.352.004-2.026-.04a6.837 6.837 0 0 1-.788-.09c-.301-1.184-.788-1.972-1.308-2.582-.23-.27-.468-.506-.662-.698a30.47 30.47 0 0 1-.103-.103c-.224-.223-.37-.382-.477-.543Z"/>
                                        </svg>        
                                    </button>
                                </Link>
                                <Link className="flex items-center justify-center hover:scale-110 group" href="https://www.linkedin.com/in/jakin200/" target="_blank" passHref={true}>
                                    <button className="">
                                        <svg width="25" height="25" viewBox="0 0 310 310" className="fill-white">
                                            <path d="M72.16 99.73H9.927a5 5 0 0 0-5 5v199.928a5 5 0 0 0 5 5H72.16a5 5 0 0 0 5-5V104.73a5 5 0 0 0-5-5zM41.066.341C18.422.341 0 18.743 0 41.362 0 63.991 18.422 82.4 41.066 82.4c22.626 0 41.033-18.41 41.033-41.038C82.1 18.743 63.692.341 41.066.341zM230.454 94.761c-24.995 0-43.472 10.745-54.679 22.954V104.73a5 5 0 0 0-5-5h-59.599a5 5 0 0 0-5 5v199.928a5 5 0 0 0 5 5h62.097a5 5 0 0 0 5-5V205.74c0-33.333 9.054-46.319 32.29-46.319 25.306 0 27.317 20.818 27.317 48.034v97.204a5 5 0 0 0 5 5H305a5 5 0 0 0 5-5V194.995c0-49.565-9.451-100.234-79.546-100.234z"/>
                                        </svg>      
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="section2" className={`${ activeSection === "section2" ? "opacity-100" : "opacity-0" } flex flex-col items-center justify-center`}>
                    <h2 className="my-8 text-4xl text-center">Education</h2>
                    <div className="flex flex-row items-center justify-center w-3/4 h-4/5">
                        <div className="w-3/4 text-2xl tracking-wide text-left h-3/4">
                            University of California, Riverside
                            <br></br>
                            MS in Computer Science
                            <br></br>
                            2024
                            <br></br>
                            <br></br>
                            <br></br>
                            University of California, Riverside
                            <br></br>
                            BS in Computer Science
                            <br></br>
                            2023
                        </div>
                    </div>
                </section>

                <section id="section3" className={`${ activeSection === "section3" ? "opacity-100" : "opacity-0" } `}>
                    <h2 className="my-8 text-4xl text-center">Projects</h2>
                </section>

                <section id="section4" className={`${ activeSection === "section4" ? "opacity-100" : "opacity-0" } `}>
                    <h2 className="my-8 text-4xl text-center">Experience</h2>
                </section>

                <section id="section5" className={`${ activeSection === "section5" ? "opacity-100" : "opacity-0" } `}>
                    <h2 className="my-8 text-4xl text-center">Section 5</h2>
                </section>
            </div>
        </div>
      </div>
    );
//     <div className="pt-20">
//     <section id="section1" className="h-screen bg-red-100">
//       <h2 className="text-4xl text-center">Section 1</h2>
//     </section>

//     <section id="section2" className="h-screen bg-green-100">
//       <h2 className="text-4xl text-center">Section 2</h2>
//     </section>

//     <section id="section3" className="h-screen bg-blue-100">
//       <h2 className="text-4xl text-center">Section 3</h2>
//     </section>
//   </div>
};

// https://stackoverflow.com/questions/42821213/different-scroll-speed-for-each-element
// https://keithclark.co.uk/articles/pure-css-parallax-websites/