
import Link from "next/link"
import { bgVariants } from "./CategoryList";
import { ICategory } from "@/interfaces/interfaces";

const getData = async() => {
  const res = await fetch(`${process.env.ENVIRONMENT}/api/categories`);

  if(!res.ok){
    throw new Error("Failed")
  }

  return res.json();
};

export const MenuCategories = async() => {

  const data:ICategory[] = await getData();
  
  return (
    <div className="flex flex-wrap gap-5 mt-5 mb-10">
    {
      data?.map( ({id,title}) => (
        <Link
            key={id}
            href='/blog?cat=style'
            className={`py-2.5 px-6 w-max rounded-lg text-sm capitalize ${bgVariants[title]}`}
        > {title} </Link>
        ))
      }
  </div>
  )
}
