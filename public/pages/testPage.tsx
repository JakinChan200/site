
'use client'
/** @type {import('next').NextConfig} */
import React from "react";
import Spline from '@splinetool/react-spline';

export const TestPage: React.FC= () => {
    return (
        <div className="flex flex-wrap justify-center items-center h-screen w-screen p-4">
            <div className="w-full self-center text-center font-extrabold text-4xl text-title">
                Other
            </div>
            <div>
                <Spline scene="https://prod.spline.design/rdAzbaTRtz-oPcYP/scene.splinecode" />
            </div>
        </div>
    );
};


export default TestPage;