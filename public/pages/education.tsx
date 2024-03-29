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
    <div className=" h-screen w-screen flex items-center">
        <div className= "w-screen">
            <div className="w-full self-center text-center font-extrabold text-4xl text-title">
            Education
            </div>
            <div className="flex justify-center m-8">
                <div className="perspective-1000 group cursor-pointer min-h-40 w-1/2 items-center"> {/*Start*/}
                    <div className="relative transform-style-3d transition-transform duration-1000 transform group-hover:rotate-y-180">
                        <div className="backface-hidden absolute w-full min-h-40 h-full rotate-y-0"> {/*End*/}
                            <div className="flex flex-none flex-wrap rounded-lg display:block w-full shadow-xl bg-white border-blue-600 border-x-2">
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
                                <div className="flex flex-wrap flex-col text-sky-600 *:ml-2">
                                    <div className="font-bold sans-serif text-black w-full mt-2">
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
                        <div className="backface-hidden absolute w-full min-h-40 h-full rotate-y-180">
                            <div className="flex flex-none flex-wrap rounded-lg bg-white display:block w-full shadow-xl min-h-40 border-blue-600 border-x-2">
                                <div className="self-start m-2 ">
                                    <div className="text-black ml-2 font-bold">
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
                <div className="perspective-1000 group cursor-pointer min-h-40 w-1/2 items-center"> {/*Start*/}
                    <div className="relative transform-style-3d transition-transform duration-1000 transform group-hover:rotate-y-180">
                        <div className="backface-hidden absolute w-full h-full rotate-y-0 "> {/*End*/}
                            <div className="flex flex-none flex-wrap rounded-lg bg-white display:block w-full shadow-xl border-blue-600 border-x-2">
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
                                <div className="flex flex-wrap flex-col text-sky-600 *:ml-2">
                                    <div className="font-bold sans-serif text-black w-full mt-2">
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
                        <div className="backface-hidden absolute w-full min-h-40 h-full rotate-y-180">
                            <div className="flex flex-none flex-wrap rounded-lg bg-white display:block w-full shadow-xl min-h-40 border-blue-600 border-x-2">
                                <div className="self-start m-2">
                                    <div className="text-black ml-2 font-bold">
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