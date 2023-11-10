import Image from 'next/image'
import { Menu } from "@/components/blogs/Menu";
import { Comments } from '@/components/blogs/Comments';
import { FC } from 'react';
import { IPost } from '@/interfaces/interfaces';

const getData = async(slug:string) => {
  const res = await fetch(`${process.env.ENVIRONMENT}/api/posts/${slug}`);

  if(!res.ok){
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePostPage:FC<{params: {slug:string}}> = async({params}) => {

  const {slug} = params;

  const data:IPost = await getData(slug);

  const {title, img, createdAt, description, user} = data;  
  
  return (
    <div>
      {/* Info */}
      <div className='flex flex-col lg:flex-row items-center gap-10'>
        {/* Text container */}
        <div className='flex-1'>
          <h1 className='text-4xl lg:text-6xl mb-10'>{title}</h1>
          <div className='flex items-center gap-5'>
            {/* User Img container */}
            {
              user?.image && (
                <div className='relative h-12 w-12'>
                  <Image src={user?.image} alt={title} fill className='object-cover rounded-full' />
                </div>
              )
            }
            {/* User text container */}
            <div className='flex flex-col gap-1 text-slate-600'>
              <span className='text-lg font-semibold'>{user?.name}</span>
              <span>{createdAt.substring(0, 10)}</span>
            </div>
          </div>
        </div>
        {/* Image container */}
        <div className='relative flex-1 h-[350px]'>
          <Image src={img} alt="" fill className='object-cover' />
        </div>
      </div>
      {/* Content */}
      <div className='flex gap-10'>
        {/* Post */}
        <div className='flex-[5] mt-10'>
          <div dangerouslySetInnerHTML={{__html: description}} />
          <div>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePostPage