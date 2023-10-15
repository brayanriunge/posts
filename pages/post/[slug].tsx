
const fetchDetails = async (slug: string)=>{
    try {
     const response = await fetch(`http://localhost:3000/api/posts/${slug}`)
     const data = response.json()
     console.log(data)
    } catch (error) {
        console.error("Error fetching Comments", error)
    }
}

export default function PostDetails(){
    return(
        <div>hey</div>
    )
}