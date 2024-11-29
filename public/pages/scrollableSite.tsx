'use client'
/** @type {import('next').NextConfig} */
import React from "react";
import Link from 'next/link'
import Image from "next/image";
import { useState } from 'react';
import { useEffect } from 'react';

export const ScrollableSite: React.FC= () => {
    const [activeSection, setActiveSection] = useState("Introduction");

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

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
        <div className="select-none text-[#f1f5f9] tracking-wide">
            <div className="fixed flex flex-col *:m-6 *:text-sm *:lg:text-2xl items-center justify-center w-1/4 lg:w-1/5 h-full lg:h-4/5 *:cursor-pointer lg:translate-y-[10%] lg:translate-x-1/4 bg-[#100000] lg:rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-80 border-2 border-black shadow-md"> {/*md:translate-y-20 md:translate-x-1/4*/}
                <div className="text-center align-middle">
                    <Link href="#Introduction"
                        className={`${
                            activeSection === "Introduction" ? "text-slate-100 transform scale-110" : "text-slate-600"
                        } hover:text-slate-100 transition-all duration-200 ease-in-out inline-block`}
                        >
                        Introduction
                    </Link>
                </div>
                <div className="text-center align-middle">
                    <Link href="#Education"
                        className={`${
                            activeSection === "Education" ? "text-slate-100 transform scale-110" : "text-slate-600"
                        } hover:text-slate-100 transition-all duration-200 ease-in-out inline-block`}
                        >
                        Education
                    </Link>            
                </div>
                <div className="text-center align-middle">
                    <Link href="#Projects"
                        className={`${
                            activeSection === "Projects" ? "text-slate-100 transform scale-110" : "text-slate-600"
                        } hover:text-slate-100 transition-all duration-200 ease-in-out inline-block`}
                        >
                        Projects
                    </Link> 
                </div>
                <div className="text-center align-middle">
                    <Link href="#Experience"
                        className={`${
                            activeSection === "Experience" ? "text-slate-100 transform scale-110" : "text-slate-600"
                        } hover:text-slate-100 transition-all duration-200 ease-in-out inline-block`}
                        >
                        Experience
                    </Link> 
                </div>
                <div className="self-center text-center align-middle">
                    <Link href="#section5"
                        className={`${
                            activeSection === "section5" ? "text-slate-100 transform scale-110" : "text-slate-600"
                        } hover:text-slate-100 transition-all duration-200 ease-in-out inline-block`}
                        >
                        Section 5
                    </Link> 
                </div>
            </div>

            <div className='flex flex-row justify-center'> {/**:bg-background*/}
                <div className='flex flex-col w-1/4 *:h-screen'>
                    <div className=''>
                    </div>
                </div>
                <div className="flex flex-col *:h-screen w-3/4 *:transition-opacity *:ease-in *:duration-200"> {/**:bg-background*/}
                    <section id="Introduction" className={`${ activeSection === "Introduction" ? "opacity-100" : "opacity-0 pointer-events-none" } flex flex-col items-center justify-center`}>
                        <div className="flex flex-row items-center justify-center w-3/4 h-4/5">
                            <div className="flex flex-col justify-center w-3/4 tracking-wide text-left h-3/4">
                                <div className="text-2xl font-medium text-left lg:text-4xl">
                                    Jakin Chan
                                </div>
                                <div className="text-xl lg:text-2xl">
                                    <br></br><br></br>
                                        Hi, I am a recent graduate of the University of California, Riverside.
                                    <br></br><br></br>
                                        I enjoy learning and applying what i've learned.
                                    <br></br><br></br>
                                        Thank you.
                                    <br></br><br></br>
                                    <br></br><br></br>
                                </div>
                                <div className="flex flex-row flex-wrap *:mr-2 *:lg:mr-4 *:mb-4 *:lg:size-14 *:size-12 *:bg-[#100000] *:rounded-2xl *:cursor-pointer">
                                    <Link className="flex items-center justify-center hover:scale-110 group" href="mailto:JakinChan200@gmail.com" target="_blank" passHref={true}>
                                        <button className="">
                                            <svg className="lg:size-8 size-7" fill="none" viewBox="0 0 24 24">
                                                <path stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 7 6.2 4.65a3 3 0 0 0 3.6 0L20 7"/>
                                                <rect width="18" height="14" x="3" y="5" stroke="#FFF" stroke-linecap="round" stroke-width="2" rx="2"/>
                                            </svg>   
                                        </button>
                                    </Link>
                                    <Link className="flex items-center justify-center hover:scale-110 group" href="https://github.com/JakinChan200" target="_blank" passHref={true}>
                                        <button className="">
                                            <svg className="fill-white size-7 lg:size-8" viewBox="0 0 98 96">
                                                <path fill="#fff" fill-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" clip-rule="evenodd"/>
                                            </svg>
                                        </button>
                                    </Link>
                                    <Link className="flex items-center justify-center hover:scale-110 group" href="https://www.linkedin.com/in/jakin200/" target="_blank" passHref={true}>
                                        <button className="">
                                            <svg className="fill-white size-6 lg:size-7" viewBox="0 0 310 310">
                                                <path d="M72.16 99.73H9.927a5 5 0 0 0-5 5v199.928a5 5 0 0 0 5 5H72.16a5 5 0 0 0 5-5V104.73a5 5 0 0 0-5-5zM41.066.341C18.422.341 0 18.743 0 41.362 0 63.991 18.422 82.4 41.066 82.4c22.626 0 41.033-18.41 41.033-41.038C82.1 18.743 63.692.341 41.066.341zM230.454 94.761c-24.995 0-43.472 10.745-54.679 22.954V104.73a5 5 0 0 0-5-5h-59.599a5 5 0 0 0-5 5v199.928a5 5 0 0 0 5 5h62.097a5 5 0 0 0 5-5V205.74c0-33.333 9.054-46.319 32.29-46.319 25.306 0 27.317 20.818 27.317 48.034v97.204a5 5 0 0 0 5 5H305a5 5 0 0 0 5-5V194.995c0-49.565-9.451-100.234-79.546-100.234z"/>
                                            </svg>      
                                        </button>
                                    </Link>
                                    <Link className="flex items-center justify-center hover:scale-110 group" href="/assets/Resume-Jakin Chan.pdf" target="_blank" passHref={true}>
                                        <button className="">
                                            <svg className="fill-white size-7 lg:size-8" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M6 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-4.828-4.83A3 3 0 0 0 13.172 1H6ZM5 4a1 1 0 0 1 1-1h6v5a2 2 0 0 0 2 2h5v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4Zm13.586 4L14 3.414V8h4.586Z" clip-rule="evenodd"/>
                                            </svg>    
                                        </button>
                                    </Link>
                                    <Link className="flex items-center justify-center hover:scale-110 group" href="public/assets/Resume-Jakin Chan.pdf" target="_blank" passHref={true}>
                                        <button className="">
                                            <svg className="fill-white size-7 lg:size-8" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M6 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-4.828-4.83A3 3 0 0 0 13.172 1H6ZM5 4a1 1 0 0 1 1-1h6v5a2 2 0 0 0 2 2h5v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4Zm13.586 4L14 3.414V8h4.586Z" clip-rule="evenodd"/>
                                            </svg>    
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="Education" className={`${ activeSection === "Education" ? "opacity-100" : "opacity-0 pointer-events-none" } flex flex-col items-center justify-center`}>
                        <div className="flex flex-col justify-center w-full h-screen">
                            <h2 className="my-8 text-2xl text-center lg:text-4xl">Education</h2>
                            <div className="flex flex-row items-center justify-center w-full text-xl tracking-wide text-center lg:text-2xl h-2/5">
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

                    <section id="Projects" className={`${ activeSection === "Projects" ? "opacity-100" : "opacity-0 pointer-events-none" } `}>
                        <div className="flex flex-col items-center justify-center w-full h-screen">
                            <h2 className="my-8 text-2xl text-center lg:text-4xl">Projects</h2>
                            <div className="w-3/4 h-[530px]">
                                <div className="overflow-x-scroll overflow-y-hidden h-3/4 gap-4 justify-start *:w-64 *:h-full flex snap-x *:bg-[#121212] *:rounded-md *:flex-shrink-0 *:snap-start">
                                    <div className="relative">
                                        <div className="flex flex-col items-center p-4">
                                            <div className="text-center w-full m-2 h-12 text-xl lg:text-2xl">
                                                2048
                                            </div>
                                            <div className="w-full mb-4 text-sm lg:text-base">
                                                In a team, built a GUI to play the hit game 2048 or have a bot play for you.
                                            </div>
                                            <div className="w-full text-sm lg:text-base">
                                                Tech Stack:
                                                <p>-Python</p>
                                            </div>
                                        </div>
                                        <Link className="absolute bottom-0 right-0 m-4 hover:scale-110" href="https://github.com/JakinChan200/2048" target="_blank" passHref={true}>
                                            <button className="px-3 py-1 font-semibold bg-blue-500 rounded-lg">
                                                &rarr;
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="relative">
                                        <div className="flex flex-col items-center p-4">
                                            <div className="text-center w-full m-2 h-12 text-xl lg:text-2xl">
                                                Summarizer
                                            </div>
                                            <div className="w-full mb-4 text-sm lg:text-base">
                                                In a team, built a Chat-GPT wrapper to summarize content given a YouTube link or text. Dark mode included.
                                            </div>
                                            <div className="w-full text-sm lg:text-base">
                                                Tech Stack:
                                                <p>-React</p>
                                                <p>-Tailwind CSS</p>
                                                <p>-Typescript</p>
                                                <p>-Axios</p>
                                                <p>-Flask</p>
                                                <p>-Python</p>
                                            </div>
                                        </div>
                                        <Link className="absolute bottom-0 right-0 m-4 hover:scale-110" href="https://github.com/liz-areizaga/summarizer" target="_blank" passHref={true}>
                                            <button className="px-3 py-1 font-semibold bg-blue-500 rounded-lg">
                                                &rarr;
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="relative">
                                        <div className="flex flex-col items-center p-4">
                                            <div className="text-center w-full m-2 h-12 text-xl lg:text-2xl">
                                                Fault Finding
                                            </div>
                                            <div className="w-full mb-4 text-sm lg:text-base">
                                                In a team, given a piece of code, and a suite of test cases, minimize the number of test cases while maintaining full coverage.
                                            </div>
                                            <div className="w-full text-sm lg:text-base">
                                                Tech Stack:
                                                <p>-C++</p>
                                                <p>-GCOV</p>
                                            </div>
                                        </div>
                                        <Link className="absolute bottom-0 right-0 m-4 hover:scale-110" href="https://github.com/JakinChan200/CS206" target="_blank" passHref={true}>
                                            <button className="px-3 py-1 font-semibold bg-blue-500 rounded-lg">
                                                &rarr;
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="relative">
                                        <div className="flex flex-col items-center p-4">
                                            <div className="text-center m-2 w-full h-12 text-xl lg:text-2xl">
                                                Feature Selection
                                            </div>
                                            <div className="w-full mb-4 text-sm lg:text-base">
                                                Implemented leave-one-out feature selction to process and develop a classifier.
                                            </div>
                                            <div className="w-full text-sm lg:text-base">
                                                Tech Stack:
                                                <p>-C++</p>
                                            </div>
                                        </div>
                                        <Link className="absolute bottom-0 right-0 m-4 hover:scale-110" href="https://github.com/JakinChan200/CS205Project2" target="_blank" passHref={true}>
                                            <button className="px-3 py-1 font-semibold bg-blue-500 rounded-lg">
                                                &rarr;
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="">
                                        
                                    </div>
                                    <div className="">
                                        
                                    </div>
                                </div>
                                <div className="flex flex-row w-full h-1/4 mt-4">
                                    <div className="w-full">
                                        <div className="flex items-center justify-center pointer-events-none h-1/2">
                                            <a href="https://skillicons.dev">
                                                <img src="https://skillicons.dev/icons?i=cpp,java,python,html,css,mysql,latex" />
                                            </a>
                                        </div>
                                        <div className="flex items-center justify-center pointer-events-none h-1/2">
                                            <a href="https://skillicons.dev">
                                                <img src="https://skillicons.dev/icons?i=github,git,vscode,vim,react,nextjs,arduino" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="Experience" className={`${ activeSection === "Experience" ? "opacity-100" : "opacity-0 pointer-events-none" } `}>
                        <div className="flex flex-col items-center justify-center w-full h-screen">
                            <h2 className="my-8 text-2xl text-center lg:text-4xl">Experience</h2>
                            <div className="w-2/3 *:w-full *:mb-8 *:bg-[#121212] *:rounded-lg *:p-6">
                                <div className="">
                                    <h3 className="mb-1 text-xl lg:text-2xl">
                                        Resident Advisor
                                    </h3>
                                    <div className="font-extralight text-xs lg:text-lg">
                                        University of California, Riverside
                                        <br></br>
                                        [ 2022 - 2024 ]
                                    </div>
                                    <div className="text-sm lg:text-lg text-pretty">
                                        - Acted as a primary advisor for roughly 45 residents on available campus resources and housing needs
                                        <br></br>
                                        - Acted as a primary advisor for 45+ residents on available campus resources and housing needs
                                        <br></br>
                                        - Fostered the largest average hall GPA increase in the building of 0.17 and 0.18 two years in a row
                                    </div>
                                </div>
                                <div className="">
                                    <h3 className="mb-1 text-xl lg:text-2xl">
                                        Summer School Activities Leader
                                    </h3>
                                    <div className="font-extralight text-xs lg:text-lg">
                                        Cornerstone Academy
                                        <br></br>
                                        [ Summer 2018 ]
                                    </div>
                                    <div className="text-sm lg:text-lg text-pretty">
                                        - Directed 20+ second graders through a variety of indoor and outdoor activities
                                        <br></br>
                                        - Coordinated and led cooking activities, arts and crafts, storytime, Bible lessons, and field trips
                                        <br></br>
                                        - Prepared materials including posters, badges, decorations, and items necessary for the above activities
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>

                    <section id="section5" className={`${ activeSection === "section5" ? "opacity-100" : "opacity-0 pointer-events-none" } `}>
                        <div className="flex flex-col items-center justify-center h-full">
                            <h2 className="my-8 text-2xl text-center lg:text-4xl">Section 5</h2>
                            <div className="flex flex-col items-start justify-center w-1/2 text-lg lg:text-xl">
                                <div className="flex justify-center w-1/2">
                                    #TODO
                                </div>
                                <p>-Re-sort/refactor files</p>
                                <p>-Adapt navbar + dimensions to mobile</p>
                                <p>-Update projects scrolling to scrollwheel and drag</p>
                                <p>-Fix projects overflow</p>
                                <p>-Update UI/UX to be WCAG level AA compliant</p>
                                <p>-Update text to be dyslexia friendly</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="w-full h-32 bg-[#100000] flex justify-center items-center text-xl">
                😁 Thank You! 😁
            </div>
        </div>
    );
};

// https://stackoverflow.com/questions/42821213/different-scroll-speed-for-each-element
// https://keithclark.co.uk/articles/pure-css-parallax-websites/