import { signIn, signOut, useSession } from "next-auth/react";


export default function Login(){
    const {data:session, } = useSession()
    console.log(session?.user)
    if(session){
        return(
            <>
            Signed in as {session.user?.email} <br />
            <button 
             className="text-sm px-6 py-2 rounded-xl  text-white bg-gray-500 disabled:opacity-25 "
             onClick={()=> signOut()}>Sign out</button>
            </>
        )
    }
    return(
       <li className="list-none mt-5">
        <button onClick={()=> signIn()} 
        className="text-sm px-6 py-2 rounded-xl  text-white bg-gray-500 disabled:opacity-25 "
        >Sign In 
        </button>
       </li>
    )
}