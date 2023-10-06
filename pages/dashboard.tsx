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
        router.replace("/api/auth/signin")
    //directing the user to sign in if he/she has not signed in
    }
   },[session])
   if(!session){
    return null
   }
    return(
        <div>
            <h1 className="text-sm ">welcome back {session?.user?.name}</h1>
        </div>
    )
}