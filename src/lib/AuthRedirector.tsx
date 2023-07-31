"use client"
import { useAuth } from "@/context/AuthContext"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"

const publicPaths = ["/", "/auth/signin", "/auth/signup"]
const redirectToAppPathsIfAuthorized = ["/", "/auth/signin", "/auth/signup"]
const isAvailable = (isAuthorized: boolean, path: string) => {
  return isAuthorized || publicPaths.includes(path)
}

const AuthRedirector = ({ children }) => {
  const pathname = usePathname()
  const router = useRouter()

  const auth = useAuth()

  useEffect(() => {
    console.log("auth", auth)
    if (!isAvailable(auth !== null, pathname)) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      console.log("redirecting to index")
      router.replace("/")
    }
    if (redirectToAppPathsIfAuthorized.includes(pathname)) {
      if (auth !== null) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        console.log("redirecting to app")
        router.replace("/app")
      }
    }
  }, [auth, pathname])

  return children
}

export default AuthRedirector
