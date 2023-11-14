import prisma from "../../prisma";
import { connectToDB } from "../../utils"
import { NextResponse } from "next/server";
import { Router } from 'express';
//import { Url } from "../../utils/apiUtils";
// const router = Router();



// router.get('/users', async (req, res) => {
//     try {
//         await connectToDB(); // Establish the database connection

//         const users = await prisma.user.findMany({
//             include: { posts: true, _count: true },
//         });

//         res.status(200).json({ users });
//     } catch (error: any) {
//         console.log(error);
//         res.status(500).json({ error: error.message });
//     } finally {
//         await prisma.$disconnect(); // Close the database connection
//     }
// });

// export default router;

// router.get('/users', async (req, res) => {
//     const userEndpoint = Url('users')});


export const GET = async (req : Request) => {
    try {
        await connectToDB();
        const users = await prisma.user.findMany({
            include:{posts: true, _count: true},
        });
        return NextResponse.json({ users }, {status: 200 });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 })
    } finally {
        await prisma.$disconnect();
    }
};
