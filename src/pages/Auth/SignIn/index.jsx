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

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  useDocumentTitle("Sign in")

  const { loginUser, user } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (user) navigate(routes.home.path)
  }, [user])

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("here")
    setEmailError(false);
    setPasswordError(false);

    if (email == "") {
      setEmailError(true);
    }
    if (password == "") {
      setPasswordError(true);
    }

    if (email && password) {
      const form = new FormData()
      form.append("email", email)
      form.append("password", password)
      loginUser(form)
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
            <h1>Sign in</h1>
          </div>
          <form>
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
            <Box>Don't have an account, <Link to={routes.signUp.path}>Sign up</Link>.</Box>
            <br />
            <Button variant="contained" color="primary"  onClick={handleSubmit}>
              Submit
            </Button>
            <br />
            <br />
          <span>Use email: <b>admin@amin.com</b> and password: <b>admin</b> for admin login.</span>
          </form>
        </Paper>
      </div>
    </Box>
  );
}
