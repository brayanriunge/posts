export type AuthPosts = {
    email: string,
    id: string
    image:string
    name: string
    post:{
        createdAt: string
        id: string
        title: string
        comments:{
            createdAt: string
            id: string
            postId: string
            title: string
            userId: string
        }
    }

}