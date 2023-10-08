type EditProps={
    id:string
    name:string
    title: string
    comments:{
        userId: string
        id:string
        postId: string
    }
}

export default function EditPost({name, id, title, comments}:EditProps){
    return(
        <div className="bg-white my-8 p-8 rounded-lg">
            <h3 className="text-gray-700 text-lg">{name}</h3>
        </div>
    )
}