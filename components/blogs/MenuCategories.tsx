import { categories } from "@/utils/categories"
import Link from "next/link"
import { bgVariants } from "./CategoryList"

export const MenuCategories = () => {
  return (
    <div className="flex flex-wrap gap-5 mt-5 mb-10">
    {
      categories.map( ({id,title}) => (
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
