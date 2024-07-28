'use client'
/** @type {import('next').NextConfig} */
import React from "react";
import Link from 'next/link';
import Image from "next/image";
import Typewriter from 'typewriter-effect';
// import Spline from '@splinetool/react-spline';
import { useTheme } from 'next-themes';

export const FrontPage: React.FC= () => {
    return (
        <div className="flex flex-wrap justify-center items-center h-screen p-4">
            {/* <div className="flex flex-wrap order-2 lg:order-1 h-5/12 lg:h-2/3 justify-center items-start text-6xl proxima font-bold bg-blue-300 box-content w-full lg:w-5/12 border-1 shadow rounded-xl m-12"> */}
                <div className="self-center w-fit m-8">
                    <div className="text-6xl font-bold display:block text-text">
                        Jakin Chan
                    </div>
                    <br />
                    <div className="text-xl display:block text-text">
                        <Typewriter
                            options={{
                            strings: ['Student', 'Cool Kid', 'Very Cool Kid'],
                            autoStart: true,
                            loop: true,
                            }}
                        />
                    </div>
                    <br />
                    {/* <div className="font-bold rounded-full flex items-center justify-center font-mono w-5 pl-10"></div> */}
                    {/* <div className="flex sticky top-0 bg-blue-200 transition -translate-x-500 ease-in-out"> */}
                    <Link href="https://www.linkedin.com/in/jakin200/" passHref={true}>
                        <button className="transition hover:-translate-y-2">
                            <Image
                            className="rounded-full shadow-lg shadow-shadow bg-transparent mr-4"
                            src="./assets/LinkedinLogo.png"
                            alt="LinkedIn Logo"
                            width={50}
                            height={50}
                            priority
                            />              
                        </button>
                    </Link>
                {/* </div> */}
                    <Link href="https://github.com/JakinChan200" passHref={true}>
                        <button className="transition hover:-translate-y-2">
                            <Image
                            className="rounded-full shadow-lg shadow-shadow bg-transparent mr-4"
                            src="./assets/GithubLogo.png"
                            alt="Github Logo"
                            width={50}
                            height={50}
                            priority
                            />
                        </button>
                    </Link>
                    <Link href="mailto:JakinChan200@gmail.com" passHref={true}>
                        <button className="transition hover:-translate-y-2">
                            <Image
                            className="rounded-full shadow-lg shadow-shadow bg-transparent mr-4"
                            src="./assets/EmailLogo.png"
                            alt="EmailLogo"
                            width={50}
                            height={50}
                            priority
                            />              
                        </button>
                    </Link>
                    <Link href="https://www.instagram.com/jakinc200/?hl=en" passHref={true}>
                        <button className="transition hover:-translate-y-2">
                            <Image
                            className="rounded-full shadow-lg shadow-shadow bg-transparent mr-4"
                            src="./assets/InstagramLogo.png"
                            alt="InstagramLogo"
                            width={50}
                            height={50}
                            priority
                            />              
                        </button>
                    </Link>
                    {/* </div> */}
                </div>
            {/* </div> */}
            <div className="flex flex-wrap flex-col order-1 lg:order-2 h-5/12 lg:h-screen justify-center items-center w-full lg:w-5/12 p-8">
                <Image
                src="./assets/Jakin.webp"
                width={500}
                height={500}
                alt="jakin image"
                bg-color="green"
                />
            </div>
            {/* <div>
                <Spline scene="https://prod.spline.design/rdAzbaTRtz-oPcYP/scene.splinecode" />
            </div> */}
        </div>

    );
};

export default FrontPage;