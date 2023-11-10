"use client"

import { IComment } from '@/interfaces/interfaces';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import useSWR from 'swr';

const fetcher = async(url:string) => {
    const res = await fetch(url);

    const data = await res.json();

    if(!res.ok){
        const error = new Error(data.message);
        throw error;
    }

    return data;
};

export const Comments:FC<{postSlug: string}> = ({postSlug}) => {

    const {status} = useSession();

    const {data, isLoading, mutate} = useSWR(`/api/comments?postSlug=${postSlug}`, fetcher);

    const [description, setDescription] = useState("");

    const handleSubmit = async() => {
        await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({description, postSlug})
        });
        mutate();
    };

  return (
    <div className="mt-10">
        <h1 className='text-slate-600 mb-8 text-2xl lg:text-3xl font-bold'>Comments</h1>

        {
            status === "authenticated"
                ? (
                    <div className='flex items-center justify-between gap-8'>
                        <textarea
                            rows={3}
                            placeholder='Write a comment...'
                            className='p-5 w-full text-slate-700'
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <button
                            className='py-4 px-5 bg-teal-700 text-white font-bold rounded-lg'
                            onClick={handleSubmit}
                            >Send</button>
                    </div>
                )
                : (
                    <Link href="/login">Login to write a comment</Link>
                )
        }
        {/* Comments List */}
        <div className='mt-5'>
            {isLoading
                ? "Loading..."
                : data?.map( (item:IComment) => (
                    <div className='mb-5' key={item.id}>
                    <div className='flex items-center gap-5 mb-5'>
                        {item?.user?.image && <Image src={item.user.image} alt="user-image" width={50} height={50} className='rounded-full object-cover h-[50px] w-[50px]' />}
                        <div className='flex flex-col gap-1 text-slate-400'>
                            <span className='font-semibold'>{item.user.name}</span>
                            <span className='text-sm'>{item.createdAt.substring(0, 10)}</span>
                        </div>
                    </div>
                    <p className='text-lg font-light'>{item.description}</p>
                </div>
                ))
            }
        </div>
    </div>
  )
}

