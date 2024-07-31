
'use client'
/** @type {import('next').NextConfig} */
import React from "react";
import Image from "next/image";

export const Interests: React.FC= () => {
    return (
        <div className='flex flex-col items-center justify-center w-screen h-screen'>
            <div className="self-center w-full text-4xl font-extrabold text-center text-title">
                interests
            </div>
            <div className='flex items-center justify-center w-full h-screen p-6 lg:w-8/12'>
                <div className='grid h-full w-full grid-cols-3 grid-rows-3 gap-4 *:bg-black *:rounded-3xl *:flex *:justify-center *:items-center'>
                    <div className='col-span-1 row-span-1'>
                    </div>
                    <div className='col-span-1 row-span-1'>
                    </div>
                    <div className='col-span-1 row-span-1'>
                    </div>
                    <div className='col-span-2 row-span-2 overflow-hidden border-2 border-black'>
                        <Image
                            className="object-cover w-full h-full border-black"
                            src="./assets/Untitled.png"
                            alt="temp"
                            width={50}
                            height={50}                  
                            priority
                        /> 
                    </div>
                    <div className='col-span-1 row-span-1'>
                    </div>
                    <div className='col-span-1 row-span-1 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-zinc-950 relative max-w-md overflow-hidden rounded-xl border border-slate-900 bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat px-8 py-16 shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]'>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Interests;