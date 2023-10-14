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
        <div>
            hey
            {editPosts?.posts.map((post)=> <EditPost fetchMyPost={fetchMyPost} key={post.id} id={post.id} name={editPosts.name} title={post.title} comment={post.comment}/>)}
        </div>
    )
}