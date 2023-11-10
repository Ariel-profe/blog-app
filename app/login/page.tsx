"use client";

import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

const LoginPage = () => {

  const {status} = useSession();
  const router = useRouter();
  
  if(status === "loading"){
    return (
      <div>Loading...</div>
    )
  };

  if(status === "authenticated"){
    return (
      router.push("/")
    )
  };

  return (
    <div className="flex items-center justify-center mt-10">
        <div className="flex flex-col gap-10 bg-slate-700 rounded-lg py-16 px-20 lg:py-24 lg:px-32">
            {/* Socials */}
            <div 
              className="flex items-center justify-center p-2 lg:p-5 text-center rounded-md bg-[#ff5555] text-white font-bold cursor-pointer"
              onClick={() => signIn("google")}
            >Sign in with Google</div>
            <div className="flex items-center justify-center p-2 lg:p-5 text-center rounded-md bg-black/80 text-white font-bold cursor-pointer">Sign in with Github</div>
            <div className="flex items-center justify-center p-2 lg:p-5 text-center rounded-md bg-[#087bea] text-white font-bold cursor-pointer">Sign in with Facebook</div>
        </div>
    </div>
  )
}

export default LoginPage