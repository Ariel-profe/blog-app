import Image from 'next/image';
import Link from 'next/link';

import { navLinks } from '../../utils/nav-links';
import { AuthLinks} from './AuthLinks';
import { ThemeToggle} from './ThemeToggle';

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between h-[100px]'>
        <div className="hidden lg:flex gap-2 flex-1">
            <Image src='/facebook.png' alt='facebook-logo' width={24} height={24} />
            <Image src='/instagram.png' alt='instagram-logo' width={24} height={24} />
            <Image src='/tiktok.png' alt='tiktok-logo' width={24} height={24} />
            <Image src='/youtube.png' alt='youtube-logo' width={24} height={24} />
        </div>
        <div className="flex-1 text-left lg:text-center text-2xl lg:text-3xl font-bold">Blog App</div>
        <div className="flex justify-end items-center gap-3 flex-1 md:text-lg lg:text-xl">
            <ThemeToggle />
            {navLinks.map( ({href, id, name}) => (
                <Link key={id} href={href} className='hidden lg:flex lg:items-center'> {name} </Link>
            ))}
            <AuthLinks />
        </div>
    </div>
  )
}
