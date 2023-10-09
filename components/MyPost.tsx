import { AuthPosts } from "@/types/AuthPost"
import { useEffect, useState } from "react"
import EditPost from "./EditPost"


export default function MyPost(){
    const [editPosts, setEditPosts] = useState<AuthPosts[]>([])
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
        <div>
            hey
                     {/* {editPosts.map((post)=> <EditPost key={post.id} title={post.posts.title} comments={post.posts.comments} name={post.name} id={post.id}/>)} */}
        </div>
    )
}