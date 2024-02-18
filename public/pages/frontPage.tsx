'use client'
/** @type {import('next').NextConfig} */
import React from "react";
import Link from 'next/link';
import Image from "next/image";
import Typewriter from 'typewriter-effect';

export const FrontPage: React.FC= () => {
    return (
        <div className="flex flex-wrap justify-center items-center h-screen">
            <div className="flex flex-wrap order-2 lg:order-1 h-2/3 justify-center items-start text-6xl proxima font-bold bg-blue-300 box-content w-5/12 border-1 shadow rounded-xl /*hover:animate-pulse*/">
                <div className="self-center w-5/12">
                    <div className="text-6xl font-bold display:block">
                        Jakin Chan
                    </div>
                    <br />
                    <div className="text-xl display:block">
                        <Typewriter
                            options={{
                            strings: ['Student', 'Cool Kid', 'Very Cool Kid'],
                            autoStart: true,
                            loop: true,
                            }}
                        />
                    </div>
                    <br />
                    <div className="font-bold rounded-full bg-white flex items-center justify-center font-mono w-5 pl-10"></div>
                    <Link href="https://www.linkedin.com/in/jakin200/" passHref={true}>
                        <button className="transition hover:-translate-y-2">
                            <Image
                            className="rounded-full shadow-lg bg-transparent mr-4"
                            src="https://cdn.discordapp.com/attachments/1207549973063794700/1207550401302237204/LinkedinLogo.png?ex=65e00df2&is=65cd98f2&hm=9840ee7eb8866bfebba2a8b82ae2e784339dcad8e36c4d27513b8dafaa6edac6&"
                            alt="LinkedIn Logo"
                            width={50}
                            height={50}
                            priority
                            />              
                        </button>
                    </Link>
                    <Link href="https://github.com/JakinChan200" passHref={true}>
                        <button className="transition hover:-translate-y-2">
                            <Image
                            className="rounded-full shadow-lg bg-transparent mr-4"
                            src="https://cdn.discordapp.com/attachments/1207549973063794700/1207550083311206460/GithubLogo.png?ex=65e00da7&is=65cd98a7&hm=40151a9cb075a74b4261bd2292b14536b9e316926ab6b3113b838753e89b32aa&"
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
                            className="rounded-full shadow-lg bg-transparent mr-4"
                            src="https://cdn.discordapp.com/attachments/1207549973063794700/1207550083072008212/EmailLogo.png?ex=65e00da7&is=65cd98a7&hm=65d8abfe2aba4fa693bd1bb750530c37c3d6abb49ce52b24a3838c8129ee2332&"
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
                            className="rounded-full shadow-lg bg-transparent mr-4"
                            src="https://cdn.discordapp.com/attachments/1207549973063794700/1207550017007657010/InstagramLogo.png?ex=65e00d97&is=65cd9897&hm=a618f79cb21bb005c050bcb5b5df69e4587968e91b959e116c0a1c4704168446&"
                            alt="InstagramLogo"
                            width={50}
                            height={50}
                            priority
                            />              
                        </button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-wrap flex-col order-1 lg:order-2 h-screen justify-center items-center w-5/12 p-8">
                <Image
                src="https://cdn.discordapp.com/attachments/1207549973063794700/1207551334262374400/jakin.webp?ex=65e00ed1&is=65cd99d1&hm=2e7423384a1bc94f693b5bca415402c604e0e710f9ecf81cd2f09ba59cd0c23d&"
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