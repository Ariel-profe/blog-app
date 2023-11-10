"use client";

import { createContext } from 'react';

interface ContextProps {
    theme: string;

    //Methods
    toggleTheme: () => void;
};

export const UIContext = createContext( {} as ContextProps );