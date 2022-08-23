import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../services/prisma"

// POST /api/quote
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const result = await prisma.customer.findMany()
  res.json(result)
}
