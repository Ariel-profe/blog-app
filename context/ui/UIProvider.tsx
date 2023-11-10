"use client";

import { FC, ReactElement, useEffect, useState } from 'react';
import { UIContext } from './UIContext';

interface Props{
      children: ReactElement | ReactElement[];
}

const getLocalStorageTheme = () => {
      if(typeof window !== "undefined" ){
            const value = localStorage.getItem("theme");
            return value || "light";
      }
};

export const UIProvider:FC<Props> = ({children}) => {
      
      const [theme, setTheme] = useState(() => {
            return getLocalStorageTheme() || "light";
      });      
      
      useEffect(() => {
            localStorage.setItem("theme", theme);      
      }, [theme]);

      const toggleTheme = () => {
            setTheme( theme === 'light' ? "dark" : "light");            
      };

return (
     <UIContext.Provider value={{
            theme,
           //Methods
           toggleTheme
     }}>
          {children}
     </UIContext.Provider>
)
};