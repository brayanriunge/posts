import { AuthPosts } from "@/types/AuthPost"
import { useEffect, useState } from "react"


export default function MyPost(){
    const [post, setPost] = useState<AuthPosts>()
    const fetchMyPost = async ()=>{
        try {
         const response = await fetch("http://localhost:3000/api/posts/authPost")
         const data = await response.json()
         console.log(data)
         setPost(data)
        } catch (error) {
         console.log(error)
        }
     }
     useEffect(()=>{
         fetchMyPost()
     },[])
    return(
        <div>
            data
        </div>
    )
}