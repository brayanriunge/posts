// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
import {prisma} from "@/util/db"
import { title } from 'process'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
 if(req.method === "POST"){
   const session = await getServerSession(req, res, authOptions)
   if(!session){
    return res.status(401).json({message:"You must be logged in first."})
   }
   const title: string= req.body.title
   const userEmail= session.user?.email
   let prismaUser = null

   //find User
   if(userEmail){
    const prismaUser = await prisma.user.findUnique({
      where: { email: userEmail}
    })
   }
   
    
  

    // check title
    if(title.length > 300){
     return res.status(403).json({message:"This field requires 300 characters"})
    }
    if(!title.length){
     return res.status(403).json({message: "This field should not be empty"})
    }

    //create post
    try {
     const result = await prisma.post.create({
     data:{
       title,
       userId: prismaUser!.id,
      }
     })
    } catch (error) {
     return res.status(403).json({message:"An error occured while making a post "})
    }
 }
}
