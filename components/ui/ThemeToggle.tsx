"use client";

import { useContext } from "react";
import Image from "next/image";

import { UIContext } from "../../context/ui/UIContext";

export const ThemeToggle = () => {

  const {theme, toggleTheme} = useContext(UIContext); 
  
  return (
    <div 
      className={`relative flex items-center justify-between w-10 h-5 rounded-[50px] cursor-pointer ${theme === 'dark' ? 'bg-slate-300' : 'bg-slate-900'}`}
      onClick={toggleTheme}
    >
      <Image src={'/moon.png'} alt="moon-button" width={14} height={14} />
      <div className={`absolute ${theme === 'dark' ? 'left-px bg-slate-900' : 'right-px bg-white'} w-[15px] h-[15px] rounded-full`}></div>
      <Image src={'/sun.png'} alt="sun-button" width={14} height={14} />
    </div>
  )
}
