import Image from "next/image"

export const Featured = () => {
  return (
    <div className="container mt-10">
      <h1 className=" text-3xl lg:text-7xl"> <b>Hey, City Blog here!</b> Discover our stories and creative ideas</h1>
      <div className="mt-10 flex flex-col lg:flex-row items-center gap-10 h-full">
        {/* Image container */}
        <div className="flex-1 h-[500px] relative hidden lg:flex">
          <Image src="/p1.jpeg" alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority className="w-full object-cover" />
        </div>
        {/* Text container */}
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-2xl lg:text-3xl">Write what you want, the world will read it</h2>
          <p className="text-lg lg:text-xl font-light text-slate-400">
          We are a company that we want you to be able to express and tell us everything you want
          </p>
          <button className="py-2 px-4 rounded-sm bg-slate-400 text-slate-800 w-max">Read More</button>
        </div>
      </div>
    </div>
  )
}
