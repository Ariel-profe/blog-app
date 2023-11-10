
import { FC } from 'react';
import { Pagination } from './Pagination';
import { PostCard } from './PostCard';
import { IPost } from '@/interfaces/interfaces';

const getData = async (page: number, cat: string) => {
  const res = await fetch(
    `https://blog-app-nine-pi.vercel.app/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

export const CardList:FC<{page: number, cat?: string}> = async({page, cat}) => {

  const {posts, count} = await getData(page, cat!);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className='w-full md:w-8/12'>
      <h1 className='my-10 text-2xl lg:text-4xl font-bold'>Recent Posts</h1>
        {
          posts?.map( (post:IPost) => (
            <div key={post.id}>
              <PostCard post={post}  />
            </div>
          ))
        }
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext}/>
    </div>
  )
}
