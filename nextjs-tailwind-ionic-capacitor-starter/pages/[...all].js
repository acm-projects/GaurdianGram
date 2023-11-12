import dynamic from 'next/dynamic';
import {PrismaClient} from "@prisma/client";

/*
const prisma = new PrismaClient()

export async function main(id, title, body){
    const post = await prisma.post.create({
        data: {
            id: "12345678901123875423478",
            title: 'My first post',
            body: 'My fist post body'
        }
    })
    console.log(post)
}

main();
*/

const App = dynamic(() => import('../components/AppShell'), {
  ssr: false,
});

export default function Index() {
  return <App />;
}