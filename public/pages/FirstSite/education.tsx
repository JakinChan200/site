'use client'
/** @type {import('next').NextConfig} */
import React from "react";
import Link from 'next/link';
import Image from "next/image";
import { Tag } from  "../../components/tag";
import { useTheme } from 'next-themes';

export const Education: React.FC= () => {
const { theme } = useTheme();
  return (
    <div className="flex items-center w-full h-screen ">
        <div className= "w-full">
            <div className="self-center w-full text-4xl font-extrabold text-center text-title">
                Education
            </div>
            <div className="flex justify-center m-8">
                <div className="items-center w-10/12 transition-all cursor-pointer perspective-1000 group xl:w-1/2"> {/*Start*/}
                    <div className="relative transition-transform duration-1000 transform transform-style-3d group-hover:rotate-y-180">
                        <div className="absolute w-full h-full backface-hidden min-h-40 rotate-y-0"> {/*End*/}
                            <div className="flex flex-wrap flex-none w-full rounded-lg shadow-xl display:block bg-background border-accentPrimary border-x-2">
                                <div className="self-center m-2">
                                    <Image
                                    className="rounded-lg"
                                    src="./assets/UCR.jpg"
                                    width={250}
                                    height={250}
                                    alt="jakin image"
                                    priority
                                    />
                                </div>
                                <div className="flex flex-wrap flex-col text-title *:ml-2">
                                    <div className="w-full mt-2 font-bold sans-serif text-title">
                                        University of California, Riverside
                                    </div>
                                    <div>
                                        MS in Compututer Science
                                    </div>
                                    <div>
                                        March 2024
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="backface-hidden rotate-y-180">
                            <div className="flex flex-wrap flex-none w-full rounded-lg shadow-xl bg-background display:block min-h-40 border-accentPrimary border-x-2">
                                <div className="self-start m-2 ">
                                    <div className="ml-2 font-bold text-title">
                                    Relevant Coursework:
                                    </div>
                                    <div className="mb-2 ml-1">
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
            <div className="flex justify-center m-8">
                <div className="items-center w-10/12 transition-all cursor-pointer perspective-1000 group xl:w-1/2"> {/*Start*/}
                    <div className="relative transition-transform duration-1000 transform transform-style-3d group-hover:rotate-y-180">
                        <div className="absolute w-full backface-hidden min-h-40 rotate-y-0"> {/*End*/}
                            <div className="flex flex-wrap flex-none rounded-lg shadow-xl bg-background display:block border-accentPrimary border-x-2">
                                <div className="self-center m-2">
                                    <Image
                                    className="rounded-lg"
                                    src="./assets/UCR.jpg"
                                    width={250}
                                    height={250}
                                    alt="jakin image"
                                    priority
                                    />
                                </div>
                                <div className="flex flex-wrap flex-col text-title *:ml-2">
                                    <div className="w-full mt-2 font-bold sans-serif text-title">
                                        University of California, Riverside
                                    </div>
                                    <div>
                                        BS in Compututer Science
                                    </div>
                                    <div>
                                        March 2023
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="backface-hidden rotate-y-180">
                            <div className="flex flex-wrap flex-none w-full rounded-lg shadow-xl bg-background display:block min-h-40 border-accentPrimary border-x-2">
                                <div className="self-start m-2">
                                    <div className="ml-2 font-bold text-title">
                                    Relevant Coursework:
                                    </div>
                                    <div className="mb-2 ml-1 ">
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
    </div>
  );
};

export default Education;