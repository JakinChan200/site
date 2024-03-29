import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
// import { ChangeTheme } from "./changeTheme";

/** Button to toggle light/dark mode. */
export function ThemeButton() {
  const [mounted, setMounted] = useState(false); 
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed space-y-4 m-4">
        {/* <div className="text-black">
            The theme is {theme}
        </div> */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.995 }}
          className="flex flex-col justify-center items-center w-11 h-11 rounded-md md:shadow text-2xl bg-purple text-white cursor-pointer hover:bg-hoverPrimary"
          onClick={() => setTheme('light')}
        >
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.995 }}
          className="flex flex-col justify-center items-center w-11 h-11 rounded-md md:shadow text-2xl bg-purple text-white cursor-pointer hover:bg-hoverPrimary"
          onClick={() => setTheme('dark')}
        >
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.995 }}
          className="flex flex-col justify-center items-center w-11 h-11 rounded-md md:shadow text-2xl bg-purple text-white cursor-pointer hover:bg-hoverPrimary"
          onClick={() => setTheme('purple')}
        >
        </motion.button>
        {/* <div className="text-black">
            The theme is {theme}
        </div> */}
    </div>
  );
}