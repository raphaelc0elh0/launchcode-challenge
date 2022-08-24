import { Prisma } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../services/prisma"

// GET /api/quotes
// POST /api/quotes
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "POST") {
      const quoteInput = req.body
      const result = await prisma.quote.create({ data: quoteInput })
      return res.json(result)
    } else {
      const result = await prisma.quote.findMany({ include: { customer: true } })
      return res.json(result)
    }
  } catch (error) {
    let message = "failed to load data"
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      message = error.message
    }

    return res.status(500).send(message)
  }
}
