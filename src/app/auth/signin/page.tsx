"use client"
import { fireAuth } from "@/lib/firebase"
import { Box, Button, TextField, Typography } from "@mui/material"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <Box>
      <Typography variant="h3">SignIn</Typography>
      <TextField
        label="Email"
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
      <TextField
        label="Password"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
      <Button
        onClick={(e) => {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          signInWithEmailAndPassword(fireAuth, email, password)
        }}
      >
        Signin
      </Button>
    </Box>
  )
}

export default SignIn
