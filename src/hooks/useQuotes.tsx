import { Quote, Prisma } from "@prisma/client"
import { AxiosError } from "axios"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import formatter from "../helper/formatter"
import { api } from "../services/api"
import { useCustomers } from "./useCustomers"

interface QuoteWithCustomerName extends Quote {
  name: string
  formattedPrice: string
}

interface QuotesContextData {
  quotes: QuoteWithCustomerName[]
  createQuote: (quote: Omit<Prisma.QuoteCreateInput, "status">) => Promise<void>
  quotateQuote: (id: string, price: number) => Promise<void>
}

const QuotesContext = createContext<QuotesContextData>({} as QuotesContextData)

interface QuotesProviderProps {
  children: ReactNode
}

export const QuotesProvider = ({ children }: QuotesProviderProps) => {
  const { customers } = useCustomers()
  const [quotes, setQuotes] = useState<Quote[]>([])

  useEffect(() => {
    const getAllQuotes = async () => {
      const result = await api.get("/quotes")
      setQuotes(result.data)
    }

    getAllQuotes()
  }, [])

  const createQuote = async (quoteInput: Omit<Prisma.QuoteCreateInput, "status">) => {
    try {
      const response = await api.post("/quotes", quoteInput)
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

  const quotateQuote = async (id: string, price: number) => {
    try {
      const response = await api.post(`/quotes/quotate/${id}`, { price })
      const quote = response.data
      setQuotes((prevState) => {
        const newState = prevState.map((obj) => {
          if (obj.id === id) return quote
          return obj
        })
        return newState
      })
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

  return (
    <QuotesContext.Provider
      value={{
        quotes: quotes.map((quote) => {
          const customer = customers.find((customer) => customer.id === quote.customerId)
          return {
            ...quote,
            transportation: quote.transportation || "-",
            formattedPrice: quote.price ? formatter.currency(quote.price) : "-",
            name: `${customer?.lastName}, ${customer?.firstName}`
          }
        }),
        createQuote,
        quotateQuote
      }}
    >
      {children}
    </QuotesContext.Provider>
  )
}

export const useQuotes = () => {
  return useContext(QuotesContext)
}
