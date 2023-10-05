import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]"
import { redirect } from "next/dist/server/api-utils"


export default async function Dashboard(){
    const session = await getServerSession(authOptions)
    if(!session){
       
    }
    return(
        <div>
            <h1 className="text-sm "></h1>
        </div>
    )
}