import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { prisma } from "@/util/db";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    if(req.method === "DELETE"){
        const session = getServerSession(req, res, authOptions)
        if(!session){
            res.status(401).json({message:"login first"})
        }
        const {id} = req.body
        try {
          const response = await prisma.post.delete({
            where:{
                id: String(id)
            }
          })
          res.status(200).json(response)
          console.log(response)
        } catch (error) {
            console.error("Error deleting post", error)
            
        }
    }
}