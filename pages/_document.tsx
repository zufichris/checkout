import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="h-screen w-screen overflow-hidden dark:bg-black dark:text-white bg-white text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
