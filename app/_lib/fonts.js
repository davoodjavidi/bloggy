import localFont from "next/font/local";

// Define your local font
export const peydaFont = localFont({
  src: [
    {
      path: "./fonts/PeydaWeb-Light.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/PeydaWeb-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PeydaWeb-Bold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-my-local",
});
