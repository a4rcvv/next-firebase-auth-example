"use client"
import { fireAuth } from "@/lib/firebase"
import { Box, Button, TextField, Typography } from "@mui/material"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <Box>
      <Typography variant="h3">SignUp</Typography>
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
          createUserWithEmailAndPassword(fireAuth, email, password)
        }}
      >
        Submit
      </Button>
    </Box>
  )
}

export default SignUp