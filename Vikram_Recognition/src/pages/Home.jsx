import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Grid } from "@mui/material";

function Home() {
  return (
    <div
      style={{
        paddingTop: "40px",
        paddingBottom: "24px",
        width: "90%",
        border: "inset",
        margin: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="center" alignItems="center" spacing={4}>
          <Grid item xs={12} textAlign="center">
            <Typography
              sx={{
                fontFamily: "Avenir",
                fontWeight: 800,
                fontSize: "40px",
                lineHeight: "39.65px",
                color: "#242424",
              }}
            >
              Welcome To
            </Typography>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontFamily: "Permanent Marker",
                fontWeight: 400,
                fontSize: "35px",
                lineHeight: "59.47px",
                color: "#3CB0AD",
              }}
            >
              Face Recognition App
            </Typography>

            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontFamily: "Permanent Marker",
                fontWeight: 400,
                fontSize: "20px",
                color: "black",
                width: "80%",
                margin: "0 auto",
              }}
            >
              Creating a web app that captures live webcam data, utilizing
              advanced face recognition tech for real-time face tagging.
              Demonstrating expertise in full-stack development, AI integration,
              and serverless deployment, our aim is to deliver interactive
              experiences leveraging the latest in cloud computing and machine
              learning!
            </Typography>
            <Link to="/user-select" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  mt: 12,
                  backgroundImage:
                    "linear-gradient(to right, #FFFF00, #FFA500)",
                  color: "black",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  width="24"
                  height="24"
                  className="w-6 h-6 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                  ></path>
                </svg>
                Log In
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
