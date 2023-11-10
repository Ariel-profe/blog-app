import { NextResponse } from "next/server";
import prisma from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";

export const GET = async(req: Request) => {

    const {searchParams} = new URL(req.url);

    const page:string | null = searchParams.get("page");
    const cat:string | null = searchParams.get("cat");

    const POST_PER_PAGE = 2;

    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * ( parseInt(page!) - 1),
        where: {
            ...(cat && {catSlug: cat})
        }
    };

    try {
        const [posts, count] = await prisma.$transaction([
           prisma.post.findMany(query),
           prisma.post.count({where: query.where}),
        ]);
        
        return NextResponse.json( {posts, count}, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
};

// CREATE A POST
export const POST = async(req: Request) => {

    const session = await getAuthSession();

    if(!session){
        return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    try {
      
        const body = await req.json();
        const post = await prisma.post.create({
           data: {...body, userEmail: session.user!.email}
        })

        return NextResponse.json(post, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
};