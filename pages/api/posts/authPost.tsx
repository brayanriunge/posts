import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { prisma } from "@/util/db";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    if(req.method === "GET"){
        const session = await getServerSession(req, res, authOptions)
        if(!session){
            return res.status(401).json({message:"Login first"})
        }
      
        try {
            const data = await prisma.post.findUnique({
             where:{
                email: session.user?.email as string
               }
            })
        } catch (error) {
            console.log(error)
            
        }
    }

}