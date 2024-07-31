
'use client'
/** @type {import('next').NextConfig} */
import React from "react";

export const Interests: React.FC= () => {
    return (
        // <div className="flex flex-wrap justify-center items-center p-4 h-screen bg-green-600 *:bg-black *:m-2">
        //     <div className='w-1/4 rounded-lg h-1/4'>
        //     </div>
        //     <div className='w-1/4 rounded-lg h-1/4'>
        //     </div>
        //     <div className='w-1/4 rounded-lg h-1/4'>
        //     </div>
        //     <div className='w-2/4 rounded-lg h-2/4'>
        //     </div>
        //     <div className='w-1/4 rounded-lg h-1/4'>
        //     </div>
        //     <div className='w-1/4 rounded-lg h-1/4'>
        //     </div>
        //     <div className='w-1/4 rounded-lg h-1/4'>
        //     </div>
        // </div>
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
                    <div className='col-span-2 row-span-2'>
                    </div>
                    <div className='col-span-1 row-span-1'>
                    </div>
                    <div className='col-span-1 row-span-1'>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Interests;