export default function Toggler(){
    return(
        <div className="fixed bg-black/50 h-full w-full z-20 left-0 top-0">
           <div className="rounded-lg absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 flex flex-col gap-6">
             <h2 className="text-xl">
                Are you sure you want to delete this post?
             </h2>
             <h3 className= "text-red-600 text-sm" >
                Pressing the delete button will permanently delete your post 
             </h3>
           </div>
        </div>
    )
}