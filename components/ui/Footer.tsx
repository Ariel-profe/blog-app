import Image from "next/image";
import Link from "next/link";

import { navLinks } from "@/utils/nav-links"

export const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between mt-5 py-5 text-slate-400">
      {/* Info */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <h1 className="text-xl font-bold">Blog App</h1>
        </div>
        <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur recusandae temporibus perferendis nobis omnis eos eum doloremque totam necessitatibus.</p>
      </div>
      {/* Links */}
      <div className="flex-1 flex mt-3 lg:mt-0 justify-between">
        <div>
          <span className="font-bold">Links</span>
            {navLinks.map( ({href, id, name}) => (
                  <Link key={id} href={href} className='flex items-center'> {name} </Link>
            ))}
        </div>
        <div>
          <span className="font-bold">Tags</span>
          <Link href={"/"} className='flex items-center'> Style </Link>
          <Link href={"/"} className='flex items-center'> Fashion </Link>
          <Link href={"/"} className='flex items-center'> Coding </Link>
          <Link href={"/"} className='flex items-center'> Travel </Link>
        </div>
        {/* Icons */}
        <div className="flex flex-col items-center gap-y-2 my-2">
          <span className="font-bold">Socials</span>
          <Image src='/facebook.png' alt='facebook-logo' width={18} height={18} />
          <Image src='/instagram.png' alt='instagram-logo' width={18} height={18} />
          <Image src='/tiktok.png' alt='tiktok-logo' width={18} height={18} />
          <Image src='/youtube.png' alt='youtube-logo' width={18} height={18} />
        </div>
      </div>
    </div>
  )
}
