"use client";

import { DEFAULT_THEME, MantineColorsTuple, createTheme } from "@mantine/core";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const myColor: MantineColorsTuple = [
  "#f2f0ff",
  "#e0dff2",
  "#bfbdde",
  "#9b98ca",
  "#7d79ba",
  "#6a65b0",
  "#605bac",
  "#504c97",
  "#464388",
  "#3b3979",
];

export const theme = createTheme({
  fontFamily: inter.style.fontFamily,
  headings: {
    fontFamily: `${inter.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
  },
  primaryColor: "brand",
  colors: {
    brand: myColor,
  },
});
