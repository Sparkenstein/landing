import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";

import { theme } from "../theme";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Devtools-x",
  description: "A collection of tools for developers",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Navbar />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
