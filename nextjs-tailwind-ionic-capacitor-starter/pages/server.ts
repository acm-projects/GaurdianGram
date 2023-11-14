import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

export async function main(){
    const post = await prisma.post.create({
        data: {
            id: "123456789011238754234192",
            title: 'My first post',
            body: 'My fist post body'
        }
    })
    console.log(post)
}

main();