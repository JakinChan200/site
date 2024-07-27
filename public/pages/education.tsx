'use client'
/** @type {import('next').NextConfig} */
import React from "react";
import Link from 'next/link';
import Image from "next/image";
import { Tag } from  "../components/tag";
import { useTheme } from 'next-themes';

export const Education: React.FC= () => {
const { theme } = useTheme();
  return (
    <div className=" h-screen w-full flex items-center">
        <div className= "w-full">
            <div className="w-full self-center text-center font-extrabold text-4xl text-title">
                Education
            </div>
            <div className="flex justify-center m-8">
                <div className="perspective-1000 group cursor-pointer w-10/12 xl:w-1/2 items-center transition-all"> {/*Start*/}
                    <div className="relative transform-style-3d transition-transform duration-1000 transform group-hover:rotate-y-180">
                        <div className="backface-hidden absolute w-full min-h-40 h-full rotate-y-0"> {/*End*/}
                            <div className="flex flex-none flex-wrap rounded-lg display:block w-full shadow-xl bg-background border-accentPrimary border-x-2">
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
                                    <div className="font-bold sans-serif text-title w-full mt-2">
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
                            <div className="flex flex-none flex-wrap rounded-lg bg-background display:block w-full shadow-xl min-h-40 border-accentPrimary border-x-2">
                                <div className="self-start m-2 ">
                                    <div className="text-title ml-2 font-bold">
                                    Relevant Coursework:
                                    </div>
                                    <div className="ml-1 mb-2">
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
                <div className="perspective-1000 group cursor-pointer w-10/12 xl:w-1/2 items-center transition-all"> {/*Start*/}
                    <div className="relative transform-style-3d transition-transform duration-1000 transform group-hover:rotate-y-180">
                        <div className="backface-hidden absolute w-full min-h-40 rotate-y-0"> {/*End*/}
                            <div className="flex flex-none flex-wrap rounded-lg bg-background display:block shadow-xl border-accentPrimary border-x-2">
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
                                    <div className="font-bold sans-serif text-title w-full mt-2">
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
                            <div className="flex flex-none flex-wrap rounded-lg bg-background display:block w-full min-h-40 shadow-xl border-accentPrimary border-x-2">
                                <div className="self-start m-2">
                                    <div className="text-title ml-2 font-bold">
                                    Relevant Coursework:
                                    </div>
                                    <div className=" ml-1 mb-2">
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