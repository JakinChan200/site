'use client'
/** @type {import('next').NextConfig} */
import React from "react";
import Link from 'next/link';
import Image from "next/image";


import { useEffect, useState } from "react";

const tracks = ["Activities Leader", "Operations Lead", "Resident Advisor", "GWC Volunteer"];

const ScrollingText = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCurrent((curr) => (curr === 2 ? 0 : curr + 1));
    }, 3000);
  }, []);

  return (
    <div className="text-blue-400 w-full text-right font-bold -mb-10 md:-mb-20">
      <p className="text-xl md:text-3xl mb-0 text-black">Experience:</p>
      <div className="h-10 md:h-20 overflow-hidden text-2xl md:text-7xl">
        {tracks.map((track, index) => (
          <div
            key={index}
            className="duration-500 h-10 md:h-20"
            style={{
              transform: `translateY(${-100 * current}%)`,
            }}
          >
            {track}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Experience: React.FC= () => {
  return (
    <div className=" h-screen flex items-center justify-center">
      <div className="">
        {/* <div className="w-full self-center text-center font-extrabold text-4xl text-black">
          Experience
        </div> */}
        <ScrollingText/>
      </div>
    </div>
  );
};