
'use client'
/** @type {import('next').NextConfig} */
import React from "react";

export const Interests: React.FC= () => {
    return (
        // <div className="flex flex-wrap justify-center items-center p-4 h-screen bg-green-600 *:bg-black *:m-2">
        //     <div className='rounded-lg h-1/4 w-1/4'>
        //     </div>
        //     <div className='rounded-lg h-1/4 w-1/4'>
        //     </div>
        //     <div className='rounded-lg h-1/4 w-1/4'>
        //     </div>
        //     <div className='rounded-lg h-2/4 w-2/4'>
        //     </div>
        //     <div className='rounded-lg h-1/4 w-1/4'>
        //     </div>
        //     <div className='rounded-lg h-1/4 w-1/4'>
        //     </div>
        //     <div className='rounded-lg h-1/4 w-1/4'>
        //     </div>
        // </div>
        <div className='w-screen h-screen flex flex-col items-center justify-center '>
            <div className="w-full self-center text-center font-extrabold text-4xl text-title">
                interests
            </div>
            <div className='flex h-screen lg:w-8/12 w-full items-center justify-center p-6'>
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