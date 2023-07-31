"use client"
import { useAuth } from "@/context/AuthContext"
import { fireAuth } from "@/lib/firebase"
import { Box, Button, Typography } from "@mui/material"
import { useRouter } from "next/navigation"

const App = () => {
  const router = useRouter()
  const handleSignOut = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fireAuth.signOut()
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push("/")
  }
  const auth = useAuth()
  return (
    <Box>
      <Typography variant="h3">App</Typography>
      <Typography variant="h4">{auth?.email}</Typography>
      <Button variant="contained" onClick={handleSignOut}>
        SignOut
      </Button>
    </Box>
  )
}

export default App
