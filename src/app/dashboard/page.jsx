import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

export default async function Dashboard(){
    const session = await getServerSession(authOptions);
    if(!session){
        return  <section className="flex w-full h-screen justify-center items-center">
        Not Authenticated!
    </section>
    }
    return <section className="flex w-full h-screen justify-center items-center">
        Welcome Back, {session.user.name}!
    </section>
}