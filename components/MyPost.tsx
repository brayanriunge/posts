import { AuthPosts } from "@/types/AuthPost"
import { useEffect, useState } from "react"
import EditPost from "./EditPost"


export default function MyPost(){
    const [editPosts, setEditPosts] = useState<AuthPosts>()
    const fetchMyPost = async ()=>{
        try {
         const response = await fetch("http://localhost:3000/api/posts/authPost")
         const data = await response.json()
         console.log(data)
         setEditPosts(data)
        } catch (error) {
         console.log(error)
        }
     }
     useEffect(()=>{
         fetchMyPost()
     },[])
     
    return(
        <div className="bg-white my-8 p-8 rounded-lg">
          <div >
            <h3 className="text-gray-700 text-lg">{editPosts?.name}</h3>
          </div>
          <div className="my-8">
            <p className="break-all">{editPosts?.posts && editPosts.posts.title}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm font-bold text-gray-700">
                Comments
            </p>
          </div>
        </div>
    )
}