import { Quote } from "@prisma/client"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { api } from "../services/api"
import prisma from "../services/prisma"

// type QuoteInput = Pick<Quote, "title" | "amount" | "type" | "category">

interface QuotesContextData {
  quotes: Quote[]
  createQuote: (quote: any) => Promise<void>
}

const QuotesContext = createContext<QuotesContextData>({} as QuotesContextData)

interface QuotesProviderProps {
  children: ReactNode
}

export const QuotesProvider = ({ children }: QuotesProviderProps) => {
  const [quotes, setQuotes] = useState<Quote[]>([])

  useEffect(() => {
    const getAllQuotes = async () => {
      const result = await api.get("/quote")
      setQuotes(result.data)
    }

    getAllQuotes()
  }, [])

  const createQuote = async (quoteInput: any) => {
    // const response = await api.post("quotes", quoteInput)
    // const { quote } = response.data
    // setQuotes((prevState) => [...prevState, quote])
  }

  return <QuotesContext.Provider value={{ quotes, createQuote }}>{children}</QuotesContext.Provider>
}

export const useQuotes = () => {
  return useContext(QuotesContext)
}
