import { useState } from "react"
import Toggler from "./Toggler"


interface Post{
  id:string       
  createdAt: number
  title:   string
}

type EditProps={
  post:Post
  id:string
  name:string
  title: string
  comment?:{
    id:string
    postId: string
    userId: string
  }[]
 
}

export default function EditPost({name, id, title, comment}:EditProps){
  //toggle
  const [toggle, setToggle] = useState(false)

  // delete post
 
  const handleDelete = async(id:string)=>{
    try {
      const response = await fetch(`http://localhost:3000/api/posts/${id}`,{
        method: "DELETE"
      })
      console.log(response)
      if(!response.ok){
        throw new Error("failed to delete Post")
      }
    } catch (error) {
      console.log(error)
      
    }
  }
  const deletePost = ()=>{
    handleDelete(id)
 }
    return(
    <>
       <div className="bg-white my-8 p-8 rounded-lg">
          <div >
            <h3 className="text-gray-700 text-lg">{name}</h3>
          </div>
          <div className="my-8">
            <p className="break-all">{title}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm font-bold text-gray-700">
                {comment?.length} Comments
            </p>
            <button onClick={deletePost} className="font-bold text-red-500  text-sm">Delete </button>
          </div>
        </div>
        {/* {toggle && <Toggler setToggle={setToggle} handleDelete={handleDelete} post={post}/>} */}
    </>
       
    )
}
