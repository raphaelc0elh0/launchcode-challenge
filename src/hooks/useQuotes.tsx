import { Quote, Prisma } from "@prisma/client"
import { AxiosError } from "axios"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { api } from "../services/api"

interface QuotesContextData {
  quotes: Quote[]
  createQuote: (quote: Omit<Prisma.QuoteCreateInput, "status">) => Promise<void>
}

const QuotesContext = createContext<QuotesContextData>({} as QuotesContextData)

interface QuotesProviderProps {
  children: ReactNode
}

export const QuotesProvider = ({ children }: QuotesProviderProps) => {
  const [quotes, setQuotes] = useState<Quote[]>([])

  console.log(quotes)

  useEffect(() => {
    const getAllQuotes = async () => {
      const result = await api.get("/quotes")
      setQuotes(result.data)
    }

    getAllQuotes()
  }, [])

  const createQuote = async (quoteInput: Omit<Prisma.QuoteCreateInput, "status">) => {
    try {
      const response = await api.post("/quotes", { ...quoteInput, status: "pending" })
      const quote = response.data
      setQuotes((prevState) => [...prevState, quote])
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          alert(error.response.data)
        }
      } else {
        alert(error)
      }
    }
  }

  return <QuotesContext.Provider value={{ quotes, createQuote }}>{children}</QuotesContext.Provider>
}

export const useQuotes = () => {
  return useContext(QuotesContext)
}
