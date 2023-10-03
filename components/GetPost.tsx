
import { useEffect, useState } from "react"
import Post from "./Posts"

export default function displayPost(){
    
    const allPosts= async ()=>{
        try {
            const response = await fetch("http://localhost:3000/api/posts/getPosts")
            const data = await response.json()
            console.log(data)
           
        } catch (error) {
            console.log("Error fetching Posts:", error)
        }
    }
   
    useEffect(()=>{
        allPosts()
    },[])

    return(
        <div>
            {}
        </div>
    )
}