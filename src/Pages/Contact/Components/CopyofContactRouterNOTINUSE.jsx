import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Gif from "./gif";
// let validateEmail = require("../../../Utils/helpers");

const defaultTheme = createTheme();

export default function Contact() {
    // const [formState, setFormState] = useState({
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   message: "",
    // });
    // const { firstName, lastName, email, message } = formState;
    // const handleInputChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormState({ ...formState, [name]: value });
    // };
    // const handleSubmit = (event) => {
    //   event.preventDefault();
    // };
    // const handleValidation = (event) => {
    //   if
    //TODO: NEED TO WRITE EMAIL VALIDATION. THIS handlesubmit function will go as "OnBlur:" into the email section below. Use regex
    // };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="lg">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Gif />
                    <Typography component="h1" variant="h5" sx={{ color: "white" }}>
                        Let's Chat!
                    </Typography>
                    <p><a href="mailto:tyler.cavanaugh24@gmail.com">Send email</a></p>
                    <Box
                        component="form"
                        noValidate
                        // onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    // onChange={handleInputChange}
                                    // value={firstName}
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    sx={{
                                        background: "white",
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    // onChange={handleInputChange}
                                    // value={lastName}
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    sx={{
                                        background: "white",
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    // onChange={handleInputChange}
                                    // value={email}
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    sx={{
                                        background: "white",
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    // onChange={handleInputChange}
                                    // value={message}
                                    fullWidth
                                    name="message"
                                    label="Message"
                                    type="text"
                                    id="Message"
                                    multiline={true}
                                    rows="3"
                                    sx={{
                                        background: "white",
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Send Message
                        </Button>
                        <Grid container justifyContent="flex-end"></Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
