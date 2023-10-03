
import { useEffect, useState } from "react"
import Post from "./Posts"
import { User } from "@prisma/client"
import { getServerSession } from "next-auth"
import { useSession } from "next-auth/react"


interface PostData{
    id: string,
    user:{
        name: string,
    }
    title: string,
}


export default function displayPost(){
    const {data:session}= useSession()
    console.log(session)

    const[posts, setPosts]= useState<PostData[]>([])
    const allPosts= async ()=>{
        try {
            const response = await fetch("http://localhost:3000/api/posts/getPosts")
            const data = await response.json()
            console.log(data)
            setPosts(data)
        } catch (error) {
            console.log("Error fetching Posts:", error)
        }
    }
   
    useEffect(()=>{
        allPosts()
    },[])
    
    return(
        <div>
            {posts.map((post)=> <Post key={post.id} name={post?.user?.name} postTitle={post.title}/>)}
        </div>
    )
}