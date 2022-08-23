import { Customer } from "@prisma/client"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { api } from "../services/api"
import prisma from "../services/prisma"

// type CustomerInput = Pick<Customer, "title" | "amount" | "type" | "category">

interface CustomersContextData {
  customers: Customer[]
}

const CustomersContext = createContext<CustomersContextData>({} as CustomersContextData)

interface CustomersProviderProps {
  children: ReactNode
}

export const CustomersProvider = ({ children }: CustomersProviderProps) => {
  const [customers, setCustomers] = useState<Customer[]>([])

  useEffect(() => {
    const getAllCustomers = async () => {
      const result = await api.get("/customer")
      setCustomers(result.data)
    }

    getAllCustomers()
  }, [])

  return <CustomersContext.Provider value={{ customers }}>{children}</CustomersContext.Provider>
}

export const useCustomers = () => {
  return useContext(CustomersContext)
}
