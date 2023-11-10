"use client";

import { FC, ReactElement } from "react";
import {SessionProvider} from 'next-auth/react'

export const AuthProvider:FC<{children: ReactElement | ReactElement[]}> = ({children}) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}
