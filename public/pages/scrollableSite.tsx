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
      <div>
        <div className="fixed flex flex-col *:m-4 items-center justify-center w-1/5 h-4/5 *:cursor-pointer translate-y-10 translate-x-1/4 bg-[#121212] rounded-md backdrop-filter backdrop-blur-sm bg-opacity-80">
            <div className="text-center self-center align-middle text-slate-600 hover:text-slate-100 text-2xl hover:scale-150">
                <Link href="#section1" className={`${ activeSection === "section1" ? "text-blue-500" : "text-gray-700" } hover:text-blue-500`} >Section 1 </Link>            
            </div>
            <div className="text-center self-center align-middle text-slate-600 hover:text-slate-100 text-2xl hover:scale-150">
                <Link href="#section2" className={`${ activeSection === "section2" ? "text-blue-500" : "text-gray-700" } hover:text-blue-500`} >Second Section</Link>            
            </div>
            <div className="text-center self-center align-middle text-slate-600 hover:text-slate-100 text-2xl hover:scale-150">
            Interests
            </div>
            <div className="text-center self-center align-middle text-slate-600 hover:text-slate-100 text-2xl hover:scale-150">
            Interests
            </div>
            <div className="text-center self-center align-middle text-slate-600 hover:text-slate-100 text-2xl hover:scale-150">
            Interests
            </div>
        </div>

        {/* <div className=" *:h-screen *:w-3/4 bg-background">
            <section id="section1" className="h-screen bg-red-100">
                <h2 className="text-4xl text-center">Section 1</h2>
            </section>

            <section id="section2" className="h-screen bg-green-100">
                <h2 className="text-4xl text-center">Section 2</h2>
            </section>

            <section id="section3" className="h-screen bg-blue-100">
                <h2 className="text-4xl text-center">Section 3</h2>
            </section>
        </div> */}
  
        <div className='flex flex-row items-center justify-center h-fill *:bg-black-800'>
            <div className='flex flex-col items-center justify-center w-1/4 h-fill translate-z-1 bg-red-400'>
                <div className='translate-z-0 -scale3d-100'>
                    breh
                </div>
                <div className='self-center h-screen'>
                     bruh
                </div>
            </div>
            <div className=" *:h-screen *:w-3/4 bg-background">
                <section id="section1" className="h-screen bg-red-100">
                    <h2 className="text-4xl text-center">Section 1</h2>
                </section>

                <section id="section2" className="h-screen bg-green-100">
                    <h2 className="text-4xl text-center">Section 2</h2>
                </section>

                <section id="section3" className="h-screen bg-blue-100">
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