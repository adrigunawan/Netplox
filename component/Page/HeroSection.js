import React from "react";
import Image from "next/image";
import { Box, Typography, TextField, Container, Grid, Button } from "@mui/material";

export default function HeroSection() {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          height: "700px",
          display: "flex",
          alignItems: "center",
          "&::after": {
            position: "absolute",
            content: '""',
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            background: "rgba(0, 0, 0, 0.4)",
            backgroundColor: `linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.8) 0,
              rgba(0, 0, 0, 0.1) 60%,
              rgba(0, 0, 0, 0.8) 100%,
            )`,
          },
        }}
      >
        <Image src="/../public/background-plox.jpg" layout="fill" objectFit="cover" alt="Backdrop Netplox" />
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1000, mx: 6 }}>
          <Grid container sx={{ maxWidth: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Grid container sx={{ maxWidth: "100%", display: "flex", flexDirection: "column", mx: 3 }}>
              <Grid item xs="auto" sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h3" component="h1" color="common.white" fontWeight="600" textAlign="center">
                  Nonton film dan anime tanpa batas
                </Typography>
                <Typography variant="h6" component="h4" color="common.white" textAlign="center" sx={{ my: 2 }}>
                  Dimana saja dan kapan saja
                </Typography>
                <TextField
                  variant="filled"
                  label="Cari anime kesukaan kamu disini..."
                  sx={{ background: "white", borderRadius: "10px", textAlign: "center" }}
                />
              </Grid>
              <Grid item xs="auto" sx={{ my: 2, mx: "auto" }}>
                <Button variant="contained" size="medium">
                  Search
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1000 }}>
          <Grid container>
            <Grid item xs>
              <Image src="/../public/boku2.jpg" width={450} height={450} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
