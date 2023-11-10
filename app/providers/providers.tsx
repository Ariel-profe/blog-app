'use client';

import { FC, ReactElement } from "react";

import { AuthProvider } from "./AuthProvider";
import { ThemeProvider } from "./ThemeProvider";
import { UIProvider } from "../../context/ui/UIProvider";

export const Providers:FC<{children: ReactElement | ReactElement[]}> = ({ children }) => {
  return (
    <AuthProvider>
      <UIProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </UIProvider>
    </AuthProvider>
  );
}