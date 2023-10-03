import Nav from "@/components/auth/Nav"
import { Roboto } from 'next/font/google'
import { Toaster } from "react-hot-toast"
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

type Prop ={
    children: React.ReactNode,
}


export default function Layout({children}:Prop){
    return(
        <div className={`${roboto.className} min-h-full bg-gray-100 `}>
          <div className="mx:4 md:mx-48">
            <Nav/>
            <Toaster
              toastOptions={{
                loading:{
                  duration:3000
                }
              }}
            />
            {children}
          </div>  
        </div>

    )
}