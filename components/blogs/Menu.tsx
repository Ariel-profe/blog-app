
import { MenuPosts } from './MenuPosts';
import { MenuCategories } from './MenuCategories';

export const bgVariants:any = {
  style: 'bg-[rgba(87,196,255,0.192)]',
  fashion: 'bg-[rgba(218,133,199,0.192)]',
  food: 'bg-[rgba(127,184,129,0.2)]',
  travel: 'bg-[rgba(255,121,87,0.212)]',
  culture: 'bg-[rgba(255,176,79,0.271)]',
  coding: 'bg-[rgba(94,79,255,0.192)]',
};

export const Menu = () => {
  return (
    <div className='hidden lg:flex lg:flex-col w-full md:w-4/12 md:mt-10'>
      {/* Popular Posts */}
      <h2 className='text-slate-400 font-medium'>{"What's hot"}</h2>
      <h1 className='font-bold text-xl lg:text-2xl'>Most Popular</h1>
      <MenuPosts withImage={false} />
      
      {/* Cateory List */}
      <h2 className='text-slate-400 font-medium'>{"Discover by topic"}</h2>
      <h1 className='font-bold text-xl lg:text-2xl'>Categories</h1>
      <MenuCategories />

      {/* Editor Pick */}
      <h2 className='text-slate-400 font-medium'>{"Chosen by editor"}</h2>
      <h1 className='font-bold text-xl lg:text-2xl'>Editos Pick</h1>
      <MenuPosts withImage />
    </div>
  )
}