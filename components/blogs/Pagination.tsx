"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";

export const Pagination:FC<{page: number, hasPrev:boolean, hasNext:boolean}> = ({page, hasPrev, hasNext}) => {

  const router = useRouter();

  return (
    <div className="flex items-center gap-4 justify-between">
      <button 
        className="w-32 p-4 bg-red-800 disabled:bg-red-900/50 disabled:cursor-not-allowed" 
        onClick={() => router.push(`?page=${page - 1}`)}
        disabled={!hasPrev}
      > Previous </button>
      <button
        className="w-32 p-4 bg-red-800 disabled:bg-red-900/50 disabled:cursor-not-allowed" 
        onClick={() => router.push(`?page=${page + 1}`)}
        disabled={!hasNext}
      > Next </button>
    </div>
  )
}
