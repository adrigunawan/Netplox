import "../styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../utils/theme";
import CssBaseline from "@mui/material/CssBaseline";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-1" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
