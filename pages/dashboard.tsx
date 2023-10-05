import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]"
import { redirect } from "next/navigation"


export default async function Dashboard(){
    const session = await getServerSession(authOptions)
    if(!session){
       redirect("/api/auth/signin")
    }
    return(
        <div>
            <h1 className="text-sm ">welcome back {session.user?.name}</h1>
        </div>
    )
}