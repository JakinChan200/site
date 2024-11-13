'use client'
/** @type {import('next').NextConfig} */
import React from "react";
import Link from 'next/link'
import { useState } from 'react';
import { useEffect } from 'react';

export const ScrollableSite: React.FC= () => {
    const [activeSection, setActiveSection] = useState("");

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
      <div className="">
        <div className="fixed flex flex-col *:m-4 items-center justify-center w-1/5 h-4/5 *:cursor-pointer translate-y-10 translate-x-1/4 bg-[#121212] rounded-md backdrop-filter backdrop-blur-sm bg-opacity-80">
            <div className="text-center self-center align-middle text-2xl">
                <Link href="#section1"
                    className={`${
                        activeSection === "section1" ? "text-slate-100 transform scale-125" : "text-slate-600"
                    } hover:text-slate-100 transition-all duration-200 ease-in-out inline-block`}
                    >
                    Section 1
                </Link>
            </div>
            <div className="text-center self-center align-middle text-2xl">
                <Link href="#section2"
                    className={`${
                        activeSection === "section2" ? "text-slate-100 transform scale-125" : "text-slate-600"
                    } hover:text-slate-100 transition-all duration-200 ease-in-out inline-block`}
                    >
                    Section 2
                </Link>            
            </div>
            <div className="text-center self-center align-middle text-2xl">
                <Link href="#section3"
                    className={`${
                        activeSection === "section3" ? "text-slate-100 transform scale-125" : "text-slate-600"
                    } hover:text-slate-100 transition-all duration-200 ease-in-out inline-block`}
                    >
                    Section 3
                </Link> 
            </div>
            <div className="text-center self-center align-middle text-2xl">
                <Link href="#section4"
                    className={`${
                        activeSection === "section4" ? "text-slate-100 transform scale-125" : "text-slate-600"
                    } hover:text-slate-100 transition-all duration-200 ease-in-out inline-block`}
                    >
                    Section 4
                </Link> 
            </div>
            <div className="text-center self-center align-middle text-2xl">
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
                    breh
                </div>
                <div className=''>
                    bruh
                </div>
                <div>
                    bru
                </div>
            </div>
            <div className="flex flex-col *:h-screen w-3/4 bg-background">
                <section id="section1" className="h-screen">
                    <h2 className="text-4xl text-center">Section 1</h2>
                </section>

                <section id="section2" className="h-screen">
                    <h2 className="text-4xl text-center">Section 2</h2>
                </section>

                <section id="section3" className="h-screen">
                    <h2 className="text-4xl text-center">Section 3</h2>
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