import { NextResponse } from "next/server";
import prisma from "@/utils/connect";

// GET SINGLE POST
export const GET = async(req: Request, {params} : {params: {slug:string}}) => {

    const {slug} = params;

    try {
      
        const post = await prisma.post.update({
            where: { slug },
            data: {views: {increment: 1}},
            include: {user: true}
        })

        return NextResponse.json(post, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
};