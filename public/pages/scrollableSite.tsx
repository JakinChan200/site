'use client'
/** @type {import('next').NextConfig} */
import React from "react";
import Link from 'next/link'
import Image from "next/image";
import { useState } from 'react';
import { useEffect } from 'react';
import TechStackTag from '../components/techStackTag';

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
        <div className="tracking-wide select-none text-slate-200">
            <div className='flex flex-row justify-center'> {/**:bg-background*/}
                <div className='flex justify-end w-0 lg:w-1/4'>
                    <div className="*:uppercase font-semibold fixed hidden flex-col *:m-8 text-xl lg:flex w-1/8 *:cursor-pointer justify-center h-screen"> {/*backdrop-filter backdrop-blur-sm bg-opacity-80*/}
                        <Link href="#Introduction"
                            className={`${
                                activeSection === "Introduction" ? "text-slate-200 transform translate-x-7" : "text-slate-600"
                            } hover:text-slate-200 transition-all duration-200 ease-in-out inline-block`}
                            >
                            Introduction
                        </Link>
                        <Link href="#Education"
                            className={`${
                                activeSection === "Education" ? "text-slate-200 transform translate-x-7" : "text-slate-600"
                            } hover:text-slate-200 transition-all duration-200 ease-in-out inline-block`}
                            >
                            Education
                        </Link>            
                        <Link href="#Projects"
                            className={`${
                                activeSection === "Projects" ? "text-slate-200 transform translate-x-7" : "text-slate-600"
                            } hover:text-slate-200 transition-all duration-200 ease-in-out inline-block`}
                            >
                            Projects
                        </Link> 
                        <Link href="#Experience"
                            className={`${
                                activeSection === "Experience" ? "text-slate-200 transform translate-x-7" : "text-slate-600"
                            } hover:text-slate-200 transition-all duration-200 ease-in-out inline-block`}
                            >
                            Experience
                        </Link> 
                    </div>
                </div>
                <div className="flex flex-col w-screen lg:w-5/6 *:transition-opacity *:ease-in *:duration-200"> {/**:bg-background*/}
                    <section id="Introduction" className={`${ activeSection === "Introduction" ? "opacity-100" : "opacity-0 pointer-events-none" } min-h-screen flex flex-col items-center justify-center`}>
                        <div className="flex flex-row items-center justify-center w-3/4 h-4/5">
                            <div className="flex flex-col justify-center w-3/4 tracking-wide text-left h-3/4 m-8">
                                <div className="text-3xl font-bold tracking-normal text-left lg:text-4xl mb-14">
                                    Jakin Chan
                                </div>
                                <div className="text-xl lg:text-2xl *:mb-8 mb-10">
                                    <p>Hi, I am a recent graduate of the University of California, Riverside.</p>
                                    <p>I enjoy learning and building things.</p>
                                    <p>Thank you.</p>
                                </div>
                                <div className="flex flex-row flex-wrap *:mr-2 *:lg:mr-4 *:mb-4 *:lg:size-14 *:size-12 *:bg-transparent *:rounded-2xl *:cursor-pointer -ml-3">
                                    <Link className="flex items-center justify-center border-2 border-transparent hover:scale-110 hover:border-gray-500 group" href="mailto:JakinChan200@gmail.com" target="_blank" passHref={true}>
                                        <button className="">
                                            <svg className="lg:size-8 size-7" fill="none" viewBox="0 0 24 24">
                                                <path stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 7 6.2 4.65a3 3 0 0 0 3.6 0L20 7"/>
                                                <rect width="18" height="14" x="3" y="5" stroke="#FFF" strokeLinecap="round" strokeWidth="2" rx="2"/>
                                            </svg>   
                                        </button>
                                    </Link>
                                    <Link className="flex items-center justify-center border-2 border-transparent hover:scale-110 hover:border-gray-500 group" href="https://github.com/JakinChan200" target="_blank" passHref={true}>
                                        <button className="">
                                            <svg className="fill-white size-7 lg:size-8" viewBox="0 0 98 96">
                                                <path fill="#fff" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                                            </svg>
                                        </button>
                                    </Link>
                                    <Link className="flex items-center justify-center border-2 border-transparent hover:scale-110 hover:border-gray-500 group" href="https://www.linkedin.com/in/jakin200/" target="_blank" passHref={true}>
                                        <button className="">
                                            <svg className="fill-white size-6 lg:size-7" viewBox="0 0 310 310">
                                                <path d="M72.16 99.73H9.927a5 5 0 0 0-5 5v199.928a5 5 0 0 0 5 5H72.16a5 5 0 0 0 5-5V104.73a5 5 0 0 0-5-5zM41.066.341C18.422.341 0 18.743 0 41.362 0 63.991 18.422 82.4 41.066 82.4c22.626 0 41.033-18.41 41.033-41.038C82.1 18.743 63.692.341 41.066.341zM230.454 94.761c-24.995 0-43.472 10.745-54.679 22.954V104.73a5 5 0 0 0-5-5h-59.599a5 5 0 0 0-5 5v199.928a5 5 0 0 0 5 5h62.097a5 5 0 0 0 5-5V205.74c0-33.333 9.054-46.319 32.29-46.319 25.306 0 27.317 20.818 27.317 48.034v97.204a5 5 0 0 0 5 5H305a5 5 0 0 0 5-5V194.995c0-49.565-9.451-100.234-79.546-100.234z"/>
                                            </svg>      
                                        </button>
                                    </Link>
                                    <Link className="flex items-center justify-center border-2 border-transparent hover:scale-110 hover:border-gray-500 group" href="/assets/Resume-Jakin Chan.pdf" target="_blank" passHref={true}>
                                        <button className="">
                                            <svg className="fill-white size-7 lg:size-8" viewBox="0 0 24 24">
                                                <path d="M6 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-4.828-4.83A3 3 0 0 0 13.172 1H6ZM5 4a1 1 0 0 1 1-1h6v5a2 2 0 0 0 2 2h5v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4Zm13.586 4L14 3.414V8h4.586Z"/>
                                            </svg>    
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="Education" className={`${ activeSection === "Education" ? "opacity-100" : "opacity-0 pointer-events-none" } flex flex-col items-center justify-center`}>
                        <div className="flex flex-col items-center justify-center w-full h-screen">
                            <h2 className="my-8 text-4xl text-center">Education</h2>
                            <div className="flex items-center justify-center">
                                <div className="flex flex-col flex-wrap mb-2 mr-2 tracking-wide lg:flex-row">
                                    <div className="flex flex-col flex-shrink-0 p-4 pl-6 pr-10 text-lg text-left rounded-md lg:text-xl">
                                        <div className="mb-1 font-semibold">
                                            M.S. in Computer Science
                                        </div>
                                        <div className="text-slate-300">
                                            University of California, Riverside
                                        </div>
                                        <div className="text-slate-300">
                                            2023-2024
                                        </div>
                                    </div>
                                    {/* <div className="hidden bg-red-200 2xl:block grow">
                                    </div> */}
                                    <div className="flex flex-col flex-shrink-0 p-4 pl-6 pr-6 text-lg text-left rounded-md lg:text-xl">
                                        <div className="mb-1 font-semibold">
                                            B.S. in Computer Science,
                                            <div className="inline ml-2 text-lg italic font-normal lg:text-lg">
                                                Cum Laude
                                            </div>
                                        </div>
                                        <div className="text-slate-300">
                                            University of California, Riverside
                                        </div>
                                        <div className="text-slate-300">
                                            2019-2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="Projects" className={`${ activeSection === "Projects" ? "opacity-100" : "opacity-0 pointer-events-none" } `}>
                        <div className="flex flex-col items-center justify-center w-full mb-8">
                            <h2 className="my-8 text-4xl text-center">Projects</h2>
                            <div className="w-4/5 lg:w-3/4 group">
                                <Link href="https://github.com/JakinChan200/site" target="_blank" passHref={true}>
                                    <div className="p-6 pl-8 rounded-lg hover:!opacity-100 group-hover:opacity-50 group transition-all hover:border-gray-500 border-2 border-transparent grid md:grid-cols-8">
                                        <div className="hidden col-span-2 m-2 text-sm font-semibold uppercase md:block">
                                            Mar 2024 - Present
                                        </div>
                                        <div className="col-span-6 col-start-1 md:col-start-3 grid-cols-subgrid">
                                            <div className="text-2xl font-medium">
                                                Personal Site
                                            </div>
                                            <div className="mt-3 tracking-wider text-md text-slate-200">
                                                A personal resume website.
                                            </div>
                                            <div className="flex flex-row flex-wrap mt-2 mb-1.5">
                                                <TechStackTag text="Next.js"/>
                                                <TechStackTag text="Tailwind CSS"/>
                                                <TechStackTag text="TypeScript"/>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link href="https://github.com/JakinChan200/2048" target="_blank" passHref={true}>
                                    <div className="p-6 pl-8 rounded-lg hover:!opacity-100 group-hover:opacity-50 group transition-all hover:border-gray-500 border-2 border-transparent grid md:grid-cols-8">
                                        <div className="hidden col-span-2 m-2 text-sm font-semibold uppercase md:block">
                                            Jan 2024 - Nov 2024
                                        </div>
                                        <div className="col-span-6 col-start-3 grid-cols-subgrid">
                                            <div className="text-2xl font-medium">
                                                2048
                                            </div>
                                            <div className="mt-3 tracking-wider text-md text-slate-200">
                                                In a team, built a GUI to play the hit game 2048 or have a bot play for you. Running multi-threaded min-max algorithm, the software returns and plays the move with the highest chances of victory based on the developed heuristic.
                                            </div>
                                            <div className="flex flex-row flex-wrap mt-2 mb-1.5">
                                                <TechStackTag text="Python"/>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link href="https://github.com/JakinChan200/CS206" target="_blank" passHref={true}>
                                    <div className="p-6 pl-8 rounded-lg hover:!opacity-100 group-hover:opacity-50 group transition-all hover:border-gray-500 border-2 border-transparent grid md:grid-cols-8">
                                        <div className="hidden col-span-2 m-2 text-sm font-semibold uppercase md:block">
                                            Mar 2024
                                        </div>
                                        <div className="col-span-6 col-start-3 grid-cols-subgrid">
                                            <div className="text-2xl font-medium">
                                                Test Suite Creation Based on Coverage Criteria
                                            </div>
                                            <div className="mt-3 tracking-wider text-md text-slate-200">
                                                In a team, given a piece of code, and a suite of test cases, minimize the number of test cases while maintaining full coverage. This reduces the time impact of continuous testing.
                                            </div>
                                            <div className="flex flex-row flex-wrap mt-2 mb-1.5">
                                                <div className="inline-block px-3 py-1 mt-1.5 mr-1.5 text-sm font-medium text-red-200 bg-green-500 rounded-full">
                                                    Class Project
                                                </div>
                                                <TechStackTag text="C++"/>
                                                <TechStackTag text="C"/>
                                                <TechStackTag text="GCOV"/>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link href="https://github.com/liz-areizaga/summarizer" target="_blank" passHref={true}>
                                    <div className="p-6 pl-8 rounded-lg hover:!opacity-100 group-hover:opacity-50 group transition-all hover:border-gray-500 border-2 border-transparent grid md:grid-cols-8">
                                        <div className="hidden col-span-2 m-2 text-sm font-semibold uppercase md:block">
                                            Aug 2023
                                        </div>
                                        <div className="col-span-6 col-start-3 grid-cols-subgrid">
                                            <div className="text-2xl font-medium">
                                                Summarizer
                                            </div>
                                            <div className="mt-3 tracking-wider text-md text-slate-200">
                                                In a team, built a Chat-GPT wrapper to summarize content given a YouTube link or text. Dark mode included.
                                            </div>
                                            <div className="flex flex-row flex-wrap mt-2 mb-1.5">
                                                <TechStackTag text="React"/>
                                                <TechStackTag text="Tailwind CSS"/>
                                                <TechStackTag text="TypeScript"/>
                                                <TechStackTag text="Axios"/>
                                                <TechStackTag text="Flask"/>
                                                <TechStackTag text="Python"/>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link href="https://github.com/JakinChan200/CS205Project2" target="_blank" passHref={true}>
                                    <div className="p-6 pl-8 rounded-lg hover:!opacity-100 group-hover:opacity-50 group transition-all hover:border-gray-500 border-2 border-transparent grid md:grid-cols-8">
                                        <div className="hidden col-span-2 m-2 text-sm font-semibold uppercase md:block">
                                            May 2023 - June 2023
                                        </div>
                                        <div className="col-span-6 col-start-3 grid-cols-subgrid">
                                            <div className="text-2xl font-medium">
                                                Feature Selection
                                            </div>
                                            <div className="mt-3 tracking-wider text-md text-slate-200">
                                                Implemented leave-one-out feature selection to process and develop a classifier.
                                            </div>
                                            <div className="flex flex-row flex-wrap mt-2 mb-1.5">
                                                <div className="inline-block px-3 py-1 mt-1.5 mr-1.5 text-sm font-medium text-red-200 bg-green-500 rounded-full">
                                                    Class Project
                                                </div>
                                                <TechStackTag text="C++"/>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section id="Experience" className={`${ activeSection === "Experience" ? "opacity-100" : "opacity-0 pointer-events-none" } `}>
                        <div className="flex flex-col items-center justify-center w-full mb-8">
                            <h2 className="my-8 text-4xl text-center">Experience</h2>
                            <div className="w-4/5 lg:w-3/4 group">
                                <div className="grid p-6 pl-8 rounded-lg md:grid-cols-8">
                                    <div className="hidden col-span-2 m-2 text-sm font-semibold uppercase md:block">
                                        Sep 2022 - Jun 2024
                                    </div>
                                    <div className="col-span-6 col-start-3 grid-cols-subgrid">
                                        <div className="text-2xl font-medium">
                                            Resident Advisor
                                        </div>
                                        <div className="font-extralight lg:text-lg">
                                            University of California, Riverside
                                        </div>
                                        <div className="mt-3 leading-relaxed tracking-wider text-md text-slate-200 text-pretty">
                                            - Developed and hosted programs for an 25+ residents based on predetermined educational goals
                                            <br></br>
                                            - Acted as a primary advisor for 45+ residents on available campus resources and housing needs
                                            <br></br>
                                            - Fostered the largest average hall GPA increase in the building of 0.17 and 0.18 two years in a row
                                        </div>
                                    </div>
                                </div>
                                <div className="grid p-6 pl-8 rounded-lg md:grid-cols-8">
                                    <div className="hidden col-span-2 m-2 text-sm font-semibold uppercase md:block">
                                        Jun 2018 - Jul 2018
                                    </div>
                                    <div className="col-span-6 col-start-3 grid-cols-subgrid">
                                        <div className="text-2xl font-medium">
                                            Summer School Activities Leader
                                        </div>
                                        <div className="font-extralight lg:text-lg">
                                            Cornerstone Academy
                                        </div>
                                        <div className="mt-3 leading-relaxed tracking-wider text-md text-slate-200 text-pretty">
                                            - Directed 20+ second graders through a variety of indoor and outdoor activities
                                            <br></br>
                                            - Coordinated and led cooking activities, arts and crafts, storytime, and field trips
                                            <br></br>
                                            - Prepared materials including posters, badges, decorations, and items necessary for the above activities
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="section5" className={`${ activeSection === "section5" ? "opacity-100" : "opacity-0 pointer-events-none" }`}>
                        <div className="flex flex-col items-center justify-center mb-8 min-h-screen">
                            <h2 className="my-8 text-4xl text-center">Extracurriculars</h2>
                            <div className="w-4/5 lg:w-3/4 group">
                                <div className="grid p-6 pl-8 rounded-lg md:grid-cols-8">
                                    <div className="hidden col-span-2 m-2 text-sm font-semibold uppercase md:block">
                                        Nov 2021 - May 2023
                                    </div>
                                    <div className="col-span-6 col-start-3 grid-cols-subgrid">
                                        <div className="text-2xl font-medium">
                                            Operations Lead
                                        </div>
                                        <div className="font-extralight lg:text-lg">
                                            Cutie Hack / Citrus Hack
                                        </div>
                                        <div className="mt-3 leading-relaxed tracking-wider text-md text-slate-200 text-pretty">
                                            - Planned and organized technical workshops and activities to serve the 700+ participants
                                            <br></br>
                                            - Influenced prize and food selection, parking and room reservations, and security and faculty issues
                                            <br></br>
                                            - Secured 80+ judges, mentors, chaperones, workshop instructors, and volunteers to aid in the event
                                        </div>
                                    </div>
                                </div>
                                <div className="grid p-6 pl-8 rounded-lg md:grid-cols-8">
                                    <div className="hidden col-span-2 m-2 text-sm font-semibold uppercase md:block">
                                        Oct 2017 - Jun 2019
                                    </div>
                                    <div className="col-span-6 col-start-3 grid-cols-subgrid">
                                        <div className="text-2xl font-medium">
                                            Program Lead Facilitator
                                        </div>
                                        <div className="font-extralight lg:text-lg">
                                            Girls Who Code
                                        </div>
                                        <div className="mt-3 leading-relaxed tracking-wider text-md text-slate-200 text-pretty">
                                            - Oversaw a program dedicated to teaching 20 middle school girls how to code
                                            <br></br>
                                            - Mentored in JavaScript, HTML, CSS, and GitHub to deploy websites as a final project
                                            <br></br>
                                            - Established instruction goals, developed curriculum, and collaborated with industry software engineers to deliver unique lessons covering a variety of topics
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="flex flex-col items-start justify-center w-1/2 text-lg lg:text-xl">
                                <div className="flex justify-center w-1/2">
                                    #TODO
                                </div>
                                <p>-Re-sort/refactor files</p>
                                <p>-Update UI/UX to be WCAG level AA compliant</p>
                                <p>-Update text to be dyslexia friendly</p>
                            </div> */}
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