import React, { useState, useEffect, useContext } from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  TextField,
  Button,
  Box,
  Paper,
} from "@mui/material";
import AuthContext from "../../../contexts/AuthContext";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import { useNavigate, Link } from "react-router-dom";
import routes from "../../../routes";

export default function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);
  useDocumentTitle("Sign up")

  const { registerUser, user } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (user) navigate(routes.home.path)
  }, [user])

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("here")
    setEmailError(false);
    setPasswordError(false);
    setNameError(false);

    if (email == "") {
      setEmailError(true);
    }
    if (password == "") {
      setPasswordError(true);
    }
    if (name == "") {
      setNameError(true);
    }

    if (email && password && name) {
      const form = new FormData()
      form.append("email", email)
      form.append("password", password)
      form.append("name", name)
      registerUser(form)
    }
  };
  return (
    <Box sx={{mt: 5}}>
      <div
        style={{
          width: 360,
          textAlign: "center",
        }}
      >
        <Paper elevation={3} sx={{ p: 2 }}>
          <div>
            <h1>Sign up</h1>
          </div>
          <form>
            <TextField
              label="Name"
              onChange={(e) => setName(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="text"
              sx={{ mb: 3 }}
              fullWidth
              value={name}
              error={nameError}
            />
            <TextField
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="email"
              sx={{ mb: 3 }}
              fullWidth
              value={email}
              error={emailError}
            />
            <TextField
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="password"
              value={password}
              error={passwordError}
              fullWidth
              sx={{ mb: 3 }}
            />
            <Box>Already have an account, <Link to={routes.signIn.path}>Sign in</Link>.</Box>
            <br />
            <Button variant="contained" color="primary"  onClick={handleSubmit}>
              Submit
            </Button>
          </form>
          <span>Use email: admin@amin.com and password: admin for admin login.</span>
        </Paper>
      </div>
    </Box>
  );
}
