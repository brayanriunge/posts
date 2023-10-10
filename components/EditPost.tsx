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
            <button className="font-bold text-red-500 text-sm">Delete</button>
          </div>
        </div>
        <Toggler/>  
    </>
       
    )
}