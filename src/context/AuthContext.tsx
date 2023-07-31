"use client"
import { fireAuth } from "@/lib/firebase"
import { User, onAuthStateChanged } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext<User | null>(null)

export const useAuth = () => {
  const auth = useContext(AuthContext)
  return auth
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(fireAuth, (user) => {
      console.log("authstatechanged", user)
      setUser(user)
    })
    return unsubscribe
  }, [])

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}
