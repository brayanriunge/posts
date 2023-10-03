type props={
    name: string
    postTitle: string
}
export default function Post({name, postTitle}: props){
    return(
        <div className="my-8 p-8 mb-0 rounded-xl bg-white">
            <div className="flex items-center gap-2">
                <h3 className="font-bold text-gray-700">
                    {name}
                </h3>
            </div>
            <div className="my-8">
                <p className="break-all">{postTitle}</p>
            </div>
        </div>
    )
}