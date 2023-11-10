import Image from "next/image";
import Link from "next/link";
import { ICategory } from "@/interfaces/interfaces";

export const bgVariants:any = {
  style: 'bg-[rgba(87,196,255,0.192)]',
  fashion: 'bg-[rgba(218,133,199,0.192)]',
  food: 'bg-[rgba(127,184,129,0.2)]',
  travel: 'bg-[rgba(255,121,87,0.212)]',
  culture: 'bg-[rgba(255,176,79,0.271)]',
  coding: 'bg-[rgba(94,79,255,0.192)]',
};

const getData = async() => {
  const res = await fetch(`${process.env.ENVIRONMENT}/api/categories`);

  if(!res.ok){
    throw new Error("Failed")
  }

  return res.json();
};

export const CategoryList = async() => {
  
  const data:ICategory[] = await getData();

  return (
    <div className="container">
      <h1 className="my-10 text-center lg:text-left text-2xl lg:text-4xl">Popular Categories</h1>
      <div className="flex flex-wrap justify-between gap-5">
        {
          data?.map( ({id, title, img}) => (
            <Link key={id} href={`/blog?cat=${title}`} className={`flex items-center gap-x-3 capitalize w-full sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-[80px] justify-center ${bgVariants[title]} rounded-md lg:hover:scale-105 hover:transition-all `}>
              {img && <Image src={`/${title}.png`} alt={`${title}-image`} width={32} height={32} className="h-8 w-8 rounded-full" />}
              <h3>{title}</h3>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
