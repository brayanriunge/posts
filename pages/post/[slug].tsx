
import Layout from "@/components/Layout"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { PostData } from ".."
import Post from "@/components/Post"
import AddComment from "@/components/AddComment"



export default function PostDetails(){
    const router = useRouter()
    const{slug} = router.query
    const [postData, setPostData]= useState<PostData>()

    const fetchDetails = async (slug: string)=>{
        try {
         const response = await fetch(`http://localhost:3000/api/posts/${slug}`)
         const data = await response.json()
         console.log(data)
         setPostData(data)
        } catch (error) {
            console.error("Error fetching Comments", error)
        }
    }
    
    useEffect(()=>{
        if(slug){
            fetchDetails(slug as string)
        }
    },[slug])
    return(
        <Layout>
           {/* {postData.map((post)=> <Post key={post.id} name={post.user.name} postTitle={post.title} comment={post.comment}/>)} */}
         <Post name={postData?.user.name} postTitle={postData?.title} id={postData?.id} comment={postData?.comment}/>
         <AddComment postId= {slug}/>
        </Layout>
    )
}