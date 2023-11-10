import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IPost } from '@/interfaces/interfaces';

export const PostCard:FC<{post: IPost}> = ({post}) => {

  const {id, createdAt, catSlug, title, slug, description, img} = post; 

  return (
    <div className='flex flex-col lg:flex-row items-center gap-10 mb-10'>
        {/* Image Container */}
        {
          img && (
          <div className="hidden lg:flex flex-1 h-[350px] relative">
            <Image src={img} alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority className="w-full object-cover" />
          </div>
          )
        }
        {/* Text Container */}
        <div className='flex-1 flex flex-col gap-8'>
          <div>
            <span className='text-slate-500'>{createdAt.substring(0,10)} - </span>
            <span className='text-red-700 font-semibold uppercase'>{catSlug}</span>
          </div>
        <Link href={`/posts/${slug}`}>
          <h1 className='capitalize'>{title}</h1>
        </Link>
        <p className='font-light text-lg text-slate-500'>{description.substring(0,60)}</p>
        <Link href={`/posts/${slug}`} className='border-b-2 border-red-700 w-max py-px'>Read More</Link>
      </div>
  </div>
  )
}
