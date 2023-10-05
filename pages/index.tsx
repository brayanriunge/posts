
import Layout from '@/components/Layout'
import AddPost from "@/components/AddPost"

import { useEffect, useState } from 'react'
import Post from '@/components/Posts'

interface PostData{
  id: string,
  user:{
    name:string,
  }
  title: string
}

export default function Home() {
  const [posts, setPosts]= useState<PostData[]>([])

  const fetchPosts= async ()=>{
    try {
      const response = await fetch("http://localhost:3000/api/posts/getPosts")
      const data =await response.json()
      console.log(data)
      setPosts(data)
    } catch (error) {
      console.error("Error fetching posts", error)
      
    }
  }
  useEffect(()=>{
   fetchPosts()
  },[])

  return (
   <Layout >
   
    <AddPost fetchPosts={fetchPosts}/>
    {posts.map((post)=> <Post key={post.id} name={post.user.name} postTitle={post.title} id={post.id} />)}
   </Layout>
  )
}
