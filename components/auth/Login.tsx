import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import {HiOutLineX} from "react-icons/hi"



export default function Login(){
    const [isAlertToggled, setIsAlertToggled]= useState<boolean>(false)
    const {data:session, } = useSession()
    console.log(session?.user)
  
    if(session){
        return(
            <>
           
            <li className="list-none mt-5">
            <div className="flex  justify-between items-center gap-4">
                <p className="font-bold text-black ">Signed in as {session.user?.email}</p>
               <button
                onClick={()=>setIsAlertToggled(!isAlertToggled)}
                className="justify-end "
               >
                 <HiOutLineX className="h-6 w-6"/>
               </button>

            </div>
               <button 
                 className="text-sm px-6 mt-3  py-2 rounded-xl  text-white bg-gray-500 disabled:opacity-25 "
                 onClick={()=> signOut()}
                >
                  Sign out
               </button>
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