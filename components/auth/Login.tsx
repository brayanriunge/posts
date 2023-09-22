import { signIn } from "next-auth/react";

export default function Login(){
    return(
       <li className="list-none mt-5">
        <button onClick={()=> signIn()} 
        className="text-sm px-6 py-2 rounded-xl  text-white bg-gray-500 disabled:opacity-25 "
        >Sign In</button>
       </li>
    )
}