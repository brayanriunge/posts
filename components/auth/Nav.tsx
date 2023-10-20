import Link from "next/link"
import Login from "./Login"
import { getServerSession } from "next-auth"
import {authOptions} from "@/pages/api/auth/[...nextauth]"
import { useEffect, useState } from "react"



export default  function Nav(){
     
    return(
        <section  >
           <div className="flex  justify-between items-center">
            <Link href="/">
                 <h1 className="text-lg font-bold">Mental health </h1>
            </Link>
            <ul className="">
                <Login/>
            </ul>
           </div>
        </section>
    )
}