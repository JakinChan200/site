
'use client'
/** @type {import('next').NextConfig} */
import React from "react";
import Spline from '@splinetool/react-spline';

export const TestPage: React.FC= () => {
    return (
        <div className="flex flex-wrap justify-center items-center h-screen p-4">
            <div>
                <Spline scene="https://prod.spline.design/rdAzbaTRtz-oPcYP/scene.splinecode" />
            </div>
        </div>
    );
};


export default TestPage;