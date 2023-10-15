
import Layout from "@/components/Layout"
import { useRouter } from "next/router"
import { useEffect } from "react"

const fetchDetails = async (slug: string)=>{
    try {
     const response = await fetch(`http://localhost:3000/api/posts/${slug}`)
     const data = response.json()
     console.log(data)
    } catch (error) {
        console.error("Error fetching Comments", error)
    }
}

export default function PostDetails(){
    const router = useRouter()
    const{slug} = router.query
    useEffect(()=>{
        if(slug){
            fetchDetails(slug as string)
        }
    },[slug])
    return(
        <Layout>
            <div>hey</div>
        </Layout>
    )
}