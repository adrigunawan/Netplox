import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import Image from "next/image";
export default function Footer() {
  return (
    <Box
      sx={{
        background: "#222",
        borderTop: "3px solid #fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid container maxWitdh="800px" alignItems="center" mx="auto" flexDirection="column">
        <Grid item xs my={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="h4" textAlign="center" color="common.white" fontWeight="bold">
            Kami juga menyediakan untuk aplikasi untuk android
          </Typography>
        </Grid>
        <Grid item xs>
          <Image src="/../public/footer-img2.png" width={400} height={450} objectFit="contain" />
        </Grid>
        <Grid item>
          <Button variant="contained" size="medium">
            Download Sekarang
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
