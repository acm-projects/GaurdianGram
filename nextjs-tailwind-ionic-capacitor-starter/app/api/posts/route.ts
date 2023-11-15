import prisma from "../../../prisma";
import { connectToDB } from "../../../utils"
import { NextResponse } from "next/server";

export const GET = async (req : Request) => {
    try {
        await connectToDB();
        const posts = await prisma.posts.findMany();
        return NextResponse.json({ posts }, {status: 200 });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 })
    } finally {
        await prisma.$disconnect();
    }
};


export const POST = async (req : Request) => {
    try {
        const { post,userId } = await req.json();

        if(!post && !userId){
            return NextResponse.json({ error: "Invalid Data" }, { status: 422 });
        }
        await connectToDB();
        const user = await prisma.user.findFirst({where:{ id: userId }});
        if(!user){
            return NextResponse.json({ message: "Invalid Username or Password" }, { status: 401 });
        }
        const newPost = await prisma.posts.create({ data: { post, userId }});
        return NextResponse.json({ post: newPost }, { status: 201 });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};
