
const fetchDetails = async ({slug: string})=>{
    const response = await fetch(`http://localhost:3000/api/posts/${slug}`, {
        method: "GET"
        
    })
}

export default function PostDetails(){
    return(
        <div>hey</div>
    )
}