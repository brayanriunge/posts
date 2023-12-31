
import Layout from "@/components/Layout"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { PostData } from ".."
import Post from "@/components/sections/Post"
import AddComment from "@/components/sections/AddComment"



export default function PostDetails(){
    const router = useRouter()
    const{slug} = router.query
    const [postData, setPostData]= useState<PostData>()

   

    const fetchDetails = async ()=>{
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
        if (slug ) {
            fetchDetails()
        }
    },[slug])
   
    return(
        <Layout>
            {postData && (
                <section className="mx-auto h-screen w-5/6 ">
                {/* {postData?.comment.map((post)=> <Post name={post.user.name} id={postData.id} postTitle={postData.title} comment={postData.comment}/>)} */}
                 <Post name={postData?.user.name} postTitle={postData?.title} id={postData?.id} comment={postData?.comment}/>
                 <AddComment postId= {slug} fetchDetails={fetchDetails}/>
                 {postData?.comment.map((comment)=>(
                    <div className="p-8 my-6 rounded-md bg-white" key={comment.id}>
                        <div className="flex items-center gap-2">
                            <h3 className="font-bold">{comment.user.name}</h3>
                            <h2 className="text-sm">{ comment.createdAt}</h2>
                        </div>
                        <div className="my-8">
                            {comment.message}
                        </div>
                    </div>
                 ))}
                </section>
                 
            )}
          
        </Layout>
    )
}