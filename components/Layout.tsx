import Nav from "@/components/auth/Nav"
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

type Prop ={
    children: React.ReactNode,
}


export default function Layout({children}:Prop){
    return(
        <div className={`${roboto.className} bg-gray-50`}>
          <div className="mx:4 md:mx-48">
            <Nav/>
            {children}
          </div>  
        </div>

    )
}