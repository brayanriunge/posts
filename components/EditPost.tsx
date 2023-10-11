import { useState } from "react"
import Toggler from "./Toggler"

type EditProps={
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
  const [remove, setRemove] = useState(false)
  const handleDelete = async()=>{
    try {
      const response = await fetch("http://localhost:3000/api/posts/deletePost",{
        method: "DELETE"
      })
      if(response.ok){
        setRemove(true)
      }else{
        throw new Error("failed to delete Post")
      }
    } catch (error) {
      console.log(error)
      
    }
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
            <button onClick={(e)=> setToggle(true)} className="font-bold text-red-500  text-sm">Delete </button>
          </div>
        </div>
        {toggle && <Toggler setToggle={setToggle} handleDelete={handleDelete}/>}
    </>
       
    )
}