
import { prisma } from "@/util/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    if(req.method === "GET"){
        try {
          const postId = req.query.slug as string  
          const data = await prisma.post.findUnique({
            where: {
                id: postId
            }
          })
        } catch (error) {
            res.status(403).json({message: " error fetching comments"})
        }
    }
}