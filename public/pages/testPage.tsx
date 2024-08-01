
'use client'
/** @type {import('next').NextConfig} */
import React from "react";
import Spline from '@splinetool/react-spline';

export const TestPage: React.FC= () => {
    return (
        <div className="flex flex-wrap items-center justify-center w-screen h-screen p-4">
            <div className="self-center w-full text-4xl font-extrabold text-center text-title">
                Other
            </div>
            <div className="w-screen h-full bg-blue-700">
                <Spline scene="https://prod.spline.design/rdAzbaTRtz-oPcYP/scene.splinecode" />
            </div>
        </div>
    );
};


export default TestPage;