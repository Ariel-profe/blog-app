import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { bgVariants } from './CategoryList';
import { popularPosts } from '@/utils/popular-posts';

export const MenuPosts:FC<{withImage: boolean}> = ({withImage}) => {
  return (
    <div className='flex flex-col gap-7 my-8'>
        {
          popularPosts.map( ({author, category, date, id, image, title}) => (
          <Link key={id} href="/" className='flex items-center gap-8'>
            {/* Image Container */}
            {withImage && (
                <div className='relative flex-1 aspect-square h-[80px]'>
                <Image src={image} alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority className="w-full object-cover rounded-full border-2 border-slate-300" />
                </div>
            )}
            {/* Text container */}
            <div className='flex-grow flex flex-col gap-1'>
              <span className={`py-1.5 px-2 rounded-2xl text-sm text-white w-max capitalize ${bgVariants[category]}`}>{category}</span>
              <h3 className='text-lg font-semibold text-slate-500'>{title}</h3>
              <div className='text-sm flex items-center'>
                <span className='mr-1'>{author}</span>
                <span className='text-slate-400'> - {date}</span>
              </div>
            </div>
          </Link>
          ))
        }
      </div>
  )
}
