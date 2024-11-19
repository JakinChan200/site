'use client'
/** @type {import('next').NextConfig} */
import React from "react";
// import Link from 'next/link';
// import Image from "next/image";
import { useTheme } from 'next-themes';



import { useEffect, useState } from "react";
import TimelineEntry from "../../components/timelineEntry";

const tracks = ["Activities Leader", "Operations Lead", "Resident Advisor", "GWC Volunteer"];

const ScrollingText = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCurrent((curr) => (curr === 2 ? 0 : curr + 1));
    }, 2000);
  }, []);

  return (
    <div className="w-full -mb-10 font-bold text-right text-blue-400 md:-mb-20">
      {/* <p className="mb-0 text-xl text-black md:text-3xl">Experience:</p> */}
      <div className="h-10 overflow-hidden text-2xl md:h-20 md:text-7xl">
        {tracks.map((track, index) => (
          <div
            key={index}
            className="h-10 duration-500 md:h-20"
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
    <div className="flex items-center justify-center h-screen ">
      <div className="mx-44">
        <div className="self-center w-full mb-8 text-4xl font-extrabold text-center text-title">
          Experience
        </div>
        <ScrollingText/>
        <div className="-my-6">
          <TimelineEntry
            date="May, 2020"
            title="The origin"
            subtitle="Acme was founded in Milan, Italy"
            description="Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus."
            />

          <TimelineEntry
            date="May, 2021"
            title="The milestone"
            subtitle="Reached 5K customers"
            description="Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus."
            />
            
          <TimelineEntry
            date="May"
            title="Bruh"
            subtitle="Breuh 2"
            description="breeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeh"
            />

          <TimelineEntry
            date="May, 2023"
            title="The IPO"
            subtitle="Acme went public at the New York Stock Exchange"
            description="Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus."
            />

          </div>
      </div>
    </div>
  );
};