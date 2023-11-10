"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";

import "react-quill/dist/quill.bubble.css";
import dynamic from "next/dynamic";

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();
  const ReactQuill = dynamic(() => import('react-quill'), {ssr: false})

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file!.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file!);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str:string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        className='p-10 text-2xl outline-none bg-transparent'
        onChange={(e) => setTitle(e.target.value)}
      />
      <select className="bg-transparent capitalize text-slate-400" onChange={(e) => setCatSlug(e.target.value)}>
        <option  value="style">style</option>
        <option  value="fashion">fashion</option>
        <option  value="food">food</option>
        <option  value="culture">culture</option>
        <option  value="travel">travel</option>
        <option  value="coding">coding</option>
      </select>
      <div className='flex gap-5 h-[700px] relative'>
            <button onClick={() => setOpen(!open)} className='w-[36px] h-[36px] rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90Zm46-90a6 6 0 0 1-6 6h-34v34a6 6 0 0 1-12 0v-34H88a6 6 0 0 1 0-12h34V88a6 6 0 0 1 12 0v34h34a6 6 0 0 1 6 6Z"/></svg>
            </button>
            {open && (
                <div className='flex gap-4 bg-slate-800 absolute z-50 w-full left-[50px]'>
                  <input
                    type="file"
                    id='image'
                    onChange={(e) => setFile(e.target.files![0] )} 
                    style={{display: "none"}}
                  />
                  <button className='flex items-center justify-center text-center w-[36px] h-[36px] rounded-full border border-slate-300'>
                    <label htmlFor="image" className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#146111" d="M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2Zm.008-12c.548 0 .992.445.992.993V13h-2V5H4v13.999L14 9l3 3v2.829l-3-3L6.827 19H14v2H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016ZM8 7a2 2 0 1 1 0 4a2 2 0 0 1 0-4Z"/></svg>
                    </label>
                  </button>
                    <button className='flex items-center justify-center text-center w-[36px] h-[36px] rounded-full border border-slate-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="#146111" d="M224 152v56a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-56a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0ZM93.66 85.66L120 59.31V152a8 8 0 0 0 16 0V59.31l26.34 26.35a8 8 0 0 0 11.32-11.32l-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 11.32 11.32Z"/></svg>
                    </button>
                    <button className='flex items-center justify-center text-center w-[36px] h-[36px] rounded-full border border-slate-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#146111" d="M6.025 16h7.95q.325 0 .463-.275t-.063-.525l-2.425-3.175q-.075-.1-.175-.15t-.225-.05q-.125 0-.225.05t-.175.15l-1.5 1.95q-.075.1-.175.15t-.225.05q-.125 0-.225-.05t-.175-.15L8.1 13q-.075-.1-.175-.138t-.225-.037q-.125 0-.225.038T7.3 13l-1.675 2.2q-.2.25-.062.525t.462.275ZM4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h12q.825 0 1.413.588T18 6v4.5l3.15-3.15q.25-.25.55-.125t.3.475v8.6q0 .35-.3.475t-.55-.125L18 13.5V18q0 .825-.588 1.413T16 20H4Zm0-2h12V6H4v12Zm0 0V6v12Z"/></svg>
                    </button>
                </div>
            )}
            <ReactQuill
                theme='bubble'
                value={value}
                onChange={setValue}
                placeholder='Tell your story...'
                className='w-full'
            />
        </div>
        <button 
          className='absolute top-[80px] right-[20px] py-2.5 px-5 bg-green-900 rounded-full text-slate-100'
          onClick={handleSubmit}
        >Publish</button>
    </div>
  );
};

export default WritePage;