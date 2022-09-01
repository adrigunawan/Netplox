import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import Image from "next/image";
export default function Footer() {
  return (
    <Box sx={{ background: "#222", borderTop: "3px solid #fff" }}>
      <Grid container alignItems="center" spacing={10} mx="auto">
        <Grid item xs my={6} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="h4" textAlign="center" color="common.white" fontWeight="bold">
            Kami juga menyediakan untuk aplikasi untuk android
          </Typography>
          <Button variant="contained" size="large" sx={{ my: 4, width: "50%" }}>
            Download Sekarang
          </Button>
        </Grid>
        <Grid item xs>
          <Image src="/../public/footer-img.jpg" width={400} height={700} objectFit="cover" />
        </Grid>
      </Grid>
    </Box>
  );
}
