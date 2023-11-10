import { CardList } from "@/components/blogs/CardList"
import { Menu } from "@/components/blogs/Menu"
import { FC } from "react"

const BlogPage:FC<{searchParams: {page: string, cat: string}}> = ({searchParams}) => {

  const page = parseInt(searchParams.page) || 1;
  const {cat} = searchParams;

  return (
    <div className="">
        <h1 className="text-center text-2xl lg:text-3xl bg-orange-400 py-1 capitalize font-bold">{cat} Blog</h1>
        <div className="flex flex-col md:flex-row gap-10">
            <CardList page={page} cat={cat} />
            <Menu />
        </div>
    </div>
  )
}

export default BlogPage