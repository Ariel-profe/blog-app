import Image from "next/image"

export const Featured = () => {
  return (
    <div className="container mt-10">
      <h1 className=" text-3xl lg:text-7xl"> <b>Hey, Ariel Elias here!</b> Discover my stories and creative ideas</h1>
      <div className="mt-10 flex flex-col lg:flex-row items-center gap-10 h-full">
        {/* Image container */}
        <div className="flex-1 h-[500px] relative hidden lg:flex">
          <Image src="/p1.jpeg" alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority className="w-full object-cover" />
        </div>
        {/* Text container */}
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-2xl lg:text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p className="text-lg lg:text-xl font-light text-slate-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit recusandae cumque impedit perferendis vel dolorum maiores nesciunt quaerat minima et mollitia, autem odit amet, libero quisquam nisi voluptatibus! Voluptas, temporibus!
          </p>
          <button className="py-2 px-4 rounded-sm bg-slate-400 text-slate-800 w-max">Read More</button>
        </div>
      </div>
    </div>
  )
}
