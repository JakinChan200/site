'use client'
/** @type {import('next').NextConfig} */
import React from "react";
import Link from 'next/link';
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import { useTheme } from 'next-themes';

export const FrontPage: React.FC= () => {
    return (
        <div className="flex flex-wrap items-center justify-center h-screen p-4">
            {/* <div className="box-content flex flex-wrap items-start justify-center order-2 w-full m-12 text-6xl font-bold bg-blue-300 shadow lg:order-1 h-5/12 lg:h-2/3 proxima lg:w-5/12 border-1 rounded-xl"> */}
                <div className="self-center m-8 w-fit">
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
                    {/* <div className="flex items-center justify-center w-5 pl-10 font-mono font-bold rounded-full"></div> */}
                    {/* <div className="sticky top-0 flex transition ease-in-out bg-blue-200 -translate-x-500"> */}
                    <Link href="https://www.linkedin.com/in/jakin200/" passHref={true}>
                        <button className="transition hover:-translate-y-2">
                            <Image
                            className="mr-4 bg-transparent rounded-full shadow-lg shadow-shadow pointer-events-none"
                            src="./assets/FirstSite/LinkedinLogo.png"
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
                            className="mr-4 bg-transparent rounded-full shadow-lg shadow-shadow pointer-events-none"
                            src="./assets/FirstSite/GithubLogo.png"
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
                            className="mr-4 bg-transparent rounded-full shadow-lg shadow-shadow pointer-events-none"
                            src="./assets/FirstSite/EmailLogo.png"
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
                                className="mr-4 bg-transparent rounded-full shadow-lg shadow-shadow pointer-events-none"
                                src="./assets/FirstSite/InstagramLogo.png"
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

            <div className="flex flex-col flex-wrap items-center justify-center order-1 w-full p-8 lg:order-2 h-5/12 lg:h-screen lg:w-5/12">
                <Image
                    className="pointer-events-none"
                    src="./assets/FirstSite/Jakin.webp"
                    width={500}
                    height={500}
                    alt="jakin image"
                    bg-color="green"
                />
            </div>
        </div>

    );
};

export default FrontPage;