import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from 'next/link'
// import { ChangeTheme } from "./changeTheme";

/** Button to toggle light/dark mode. */
export function NavMenu() {
  const [mounted, setMounted] = useState(false); 
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed flex flex-col *:m-4 items-center justify-center w-1/5 h-4/5 *:cursor-pointer translate-y-10 translate-x-1/4 bg-[#121212] rounded-md backdrop-filter backdrop-blur-sm bg-opacity-80">
        <div className="text-center self-center align-middle text-slate-600 hover:text-slate-100 text-2xl hover:scale-150">
          <Link href="#first-section">My first section</Link>
        </div>
        <div className="text-center self-center align-middle text-slate-600 hover:text-slate-100 text-2xl hover:scale-150">
          Interests
        </div>
        <div className="text-center self-center align-middle text-slate-600 hover:text-slate-100 text-2xl hover:scale-150">
          Interests
        </div>
        <div className="text-center self-center align-middle text-slate-600 hover:text-slate-100 text-2xl hover:scale-150">
          Interests
        </div>
        <div className="text-center self-center align-middle text-slate-600 hover:text-slate-100 text-2xl hover:scale-150">
          Interests
        </div>
    </div>

  );
}

  // Inspo
  //https://camillemormal.com/about

  // Sources
  // https://stackoverflow.com/questions/64731846/how-to-highlight-an-active-section-on-the-navbar-using-tailwind-with-nuxt-js
  // https://stackoverflow.com/questions/29240028/css-make-a-background-image-scroll-slower-than-everything-else
