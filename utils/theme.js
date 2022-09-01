import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { green, purple, red, blue } from "@mui/material/colors";

const base = createTheme({
  palette: {
    primary: {
      main: blue[600],
    },
    secondary: {
      main: green[500],
    },
  },

  typography: {
    subtitle1: {
      fontSize: 12,
    },
    subtitle2: {
      fontSize: 18,
    },
    subtitle3: {
      fontSize: 24,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: "bold",
    },
  },
});

const theme = responsiveFontSizes(base);

export default theme;
