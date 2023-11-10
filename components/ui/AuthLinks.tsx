"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "../../utils/nav-links";
import { signOut, useSession } from "next-auth/react";

export const AuthLinks = () => {

  const [open, setOpen] = useState(false);

  const {status} = useSession();

  return (
    <>
      {
      status === "unauthenticated"
       ? (<Link href={'/login'}> Login </Link>)  
       : (
        <>
          <Link href={'/write'}> Write </Link>
          <span className="cursor-pointer" onClick={() => signOut()}>Logout</span>
        </>
       )
      }
      <div 
        className="lg:hidden cursor-pointer"
        onClick={() => setOpen(prev => !prev)}
      >
        {
          open
            ? (<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.586l4.95-4.95l1.415 1.415l-4.95 4.95l4.95 4.95l-1.415 1.414l-4.95-4.95l-4.95 4.95l-1.413-1.415l4.95-4.95l-4.95-4.95L7.05 5.638l4.95 4.95Z"/></svg>)
            : (<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="none">
            <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/>
            <path fill="currentColor" d="M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5h16Zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3h16Zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3h16Z"/></g>
          </svg>)
        }
        {
          open && (
            <div className="absolute left-0 top-[100px] h-[calc(100vh_-_100px)] flex flex-col items-center justify-center gap-10 w-full bg-slate-100 dark:bg-slate-800 text-3xl z-50">
              {navLinks.map( ({href, id, name}) => (
                <Link key={id} href={href} onClick={() => setOpen(prev => !prev)} className='flex lg:hidden lg:items-center' > {name} </Link>
            ))}
            </div>
          )
        }
      </div>
    </>
  )
}
