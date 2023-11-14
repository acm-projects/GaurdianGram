import prisma from "../../../prisma";
import { connectToDB } from "../../../utils"
import { NextResponse } from "next/server";

export const GET = async (
    req : Request, 
    {params}: {params:{ id: string }}
    ) => {
    try {
        await connectToDB();
        const post = await prisma.posts.findFirst({ 
            where: { id: params.id},
        });
        return NextResponse.json({ post }, {status: 200 });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 })
    } finally {
        await prisma.$disconnect();
    }
};

export const PUT = async (
    req : Request, 
    {params}: {params:{ id: string }}
    ) => {
    try {
        const { post }  = await req.json();
        await connectToDB();
        const updatedPost = await prisma.posts.update({
            data: {post},
            where: { id: params.id },
        });
        return NextResponse.json({ post: updatedPost }, {status: 200 });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 })
    } finally {
        await prisma.$disconnect();
    }
};

export const DELETE = async (
    req : Request, 
    {params}: {params:{ id: string }}
    ) => {
    try {
        await connectToDB();
        const post = await prisma.posts.delete({ 
            where: { id: params.id},
        });
        return NextResponse.json({ post }, {status: 200 });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 })
    } finally {
        await prisma.$disconnect();
    }
};