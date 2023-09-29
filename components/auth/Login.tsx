import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {HiOutlineX} from "react-icons/hi"
import {CgProfile} from "react-icons/cg"

// type User={
//   image: string

// }

export default function Login(){
    const [isAlertToggled, setIsAlertToggled]= useState<boolean>(true)
    const handleClick= ()=>{
      setIsAlertToggled(!isAlertToggled)
    }
    const {data:session, } = useSession()
    console.log(session?.user)
  
    if(session){
        return(
            <>
             {isAlertToggled && (
              <div className="flex  justify-between bg-emerald-400 rounded-md items-center gap-4">
                 <p className="font-bold px-4 py-2 text-black ">Signed in as {session.user?.name}</p>
               
                <button
                 onClick={handleClick}
                 className="justify-end px-2 "
                >
                  <HiOutlineX className="h-6 w-6"/>
                </button>
              </div>
             )}
            <li className="list-none flex items-center gap-6 mt-5">
              <button 
               className="text-sm px-6 mt-3  py-2 rounded-xl  text-white bg-gray-500 disabled:opacity-25 "
               onClick={()=> signOut()}
              >
                Sign out
              </button>
              <Link href={"/dashboard"} >
                {/**icon of profile */}
                <CgProfile className ="h-[64px] w-[64px]"/>

               {/**<Image 
                className="rounded-full w-14"
                height={64}
                width={64}
                src={image}
                alt=""
                priority
              /> */}
              </Link>
            </li>
           
           
            </>
        )
    }
    return(
       <li className="list-none mt-5">
        <button onClick={()=>signIn()} 
        className="text-sm px-6 py-2 rounded-xl  text-white bg-gray-500 disabled:opacity-25 "
        >Sign In 
         
        </button>
        
       </li>
    )
}