import Link from "next/link"
import Login from "./Login"


export default function Nav(){
    return(
        <section  >
           <div className="flex  justify-between items-center">
            <Link href="/">
                 <h1 className="text-lg font-bold">Send It.</h1>
            </Link>
            <ul className="">
                <Login/>
            </ul>
           </div>
        </section>
    )
}