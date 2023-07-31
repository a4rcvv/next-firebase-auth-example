"use client"
import { Box, Button, Typography } from "@mui/material"
import { useRouter } from "next/navigation"

export const Index = () => {
  const router = useRouter()
  return (
    <Box>
      <Typography variant="h3">Next + Firebase Auth</Typography>
      <Button
        variant="contained"
        onClick={() => {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          router.push("/auth/signin")
        }}
      >
        SignIn
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          router.push("/auth/signup")
        }}
      >
        SignUp
      </Button>
    </Box>
  )
}

export default Index
