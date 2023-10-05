import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]"
import { redirect } from "next/navigation"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect } from "react"


export default async function Dashboard(){
    const{data: session} = useSession()
    const router = useRouter()
   useEffect(()=>{
    if(!session){
        window.location.href= "/api/auth/signin"
    }
   },[session])
    return(
        <div>
            <h1 className="text-sm ">welcome back {session?.user?.name}</h1>
        </div>
    )
}