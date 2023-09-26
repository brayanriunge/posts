import { signIn, signOut, useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";


export default function Login(){
    const {data:session, } = useSession()
    console.log(session?.user)
    const notify = ()=> toast(session?.user?.email)

    const functionToast= (arg1:any)=>{
        console.log("executed function 1", arg1)
    }
    const functionSign = async (arg2: () => Promise<undefined>) => {
        try {
            const result = await arg2();
            console.log("executed functionSign", result);
        } catch (error) {
            console.error("Error in functionSign:", error);
        }
    }

    const handleClick = ()=>{
        const arg1 = ()=> toast(session?.user?.email)
        const arg2 = ()=> signIn()

        functionToast(arg1)
        functionSign(arg2)
    }
    if(session){
        return(
            <>
            
            <button 
             className="text-sm px-6 py-2 rounded-xl  text-white bg-gray-500 disabled:opacity-25 "
             onClick={()=> signOut()}
            >
                Sign out
            </button>
            <ToastContainer/>
            </>
        )
    }
    return(
       <li className="list-none mt-5">
        <button onClick={handleClick} 
        className="text-sm px-6 py-2 rounded-xl  text-white bg-gray-500 disabled:opacity-25 "
        >Sign In 
        </button>
       </li>
    )
}