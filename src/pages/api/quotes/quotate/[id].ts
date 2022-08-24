import { Prisma } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../../services/prisma"

// POST /api/quotes/quotate/[id]
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query
  const id = query.id as string

  try {
    if (req.method === "POST") {
      const quotateInput = req.body
      const result = await prisma.quote.update({
        where: {
          id
        },
        data: {
          price: quotateInput.price,
          status: "quotated"
        }
      })
      return res.json(result)
    } else {
      throw Error
    }
  } catch (error) {
    let message = "failed to load data"
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      message = error.message
    }

    return res.status(500).json(message)
  }
}
