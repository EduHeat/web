import "../styles/globals.scss";
import { createTheme, NextUIProvider } from "@nextui-org/react";

const myDarkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {},
    fonts: {
      mono: "'Inconsolata', monospace",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={myDarkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
