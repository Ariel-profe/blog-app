import { FC } from "react";
import { CardList } from "../components/blogs/CardList";
import { Featured } from "../components/blogs/Featured";
import { CategoryList } from "../components/blogs/CategoryList";
import { Menu } from "../components/blogs/Menu";

 const HomePage:FC<{searchParams: {page: string}}> = ({searchParams}) => {

  const page = parseInt(searchParams.page) || 1;

  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="flex flex-col md:flex-row gap-10">
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  )
}

export default HomePage
