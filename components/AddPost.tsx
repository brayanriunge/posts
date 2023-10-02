import { error } from "console"
import { useState } from "react"


export default function CreatePost(){
    const [title, setTitle]= useState("")
    const [isDisabled, setIsDisabled]= useState(false)

    async function  createPost(e: React.FormEvent){
        e.preventDefault()
        setIsDisabled(true)
       
        fetch("/api/posts/addPost", {
            method: "POST",
            headers: {
                "contentType": "application/json"
            },
            body: JSON.stringify({title})
        })
        .then(async (response)=>{
            if(!response.ok){
                throw new Error(`Http Error! ${response.status}`)
            }
            const data = await response.json()
            return data
        })
        .catch(error=>{
            console.log("Error", error)
        })
        
        
    }

    return(
        <form
         onSubmit={createPost} 
         className="bg-white p-8 my-8 rounded-md"
        >
            <div className="flex flex-col my-4 ">
                <textarea
                 name="title"
                 value={title}
                 placeholder="What's on your mind?"
                 onChange={(e)=> setTitle(e.target.value)}
                 className="text-lg bg-gray-200 p-4 my-2 rounded-md"
                ></textarea>
            </div>
            <div className="flex  items-center justify-between gap-2">
                <p className={`font-bold text-sm ${title.length > 300 ? "text-red-700" : "text-gray-700"}`}>{`${title.length}/300`}</p>
                <button
                 className="bg-teal-600 px-6 py-2 rounded-xl text-sm disabled:opacity-25 text-white"
                 type="submit"
                 disabled = {isDisabled}
                >
                    Create Post
                </button>
            </div>
        </form>
    )
}