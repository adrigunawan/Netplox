import * as React from "react";
import { Box, Grid, Select, MenuItem, Button, OutlinedInput, InputLabel, FormControl } from "@mui/material";
import Logo from "../Comp/Logo";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
export default function Header() {
  return (
    <>
      <Box>
        <AppBar position="absolute" sx={{ background: "transparent", padding: "10px " }} elevation={0}>
          <ToolBar>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs>
                <Logo />
              </Grid>
              <Grid item xs="auto">
                <Select
                  name="Language"
                  defaultValue="ID"
                  size="small"
                  sx={{ border: "2px solid #fff", color: "common.white" }}
                >
                  <MenuItem value="ID">Bahasa Indonesia</MenuItem>
                  <MenuItem value="EN">English</MenuItem>
                </Select>
              </Grid>
              <Grid item xs="auto">
                <Button variant="contained" color="primary">
                  Sign in
                </Button>
              </Grid>
            </Grid>
          </ToolBar>
        </AppBar>
      </Box>
    </>
  );
}
