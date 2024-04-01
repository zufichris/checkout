import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Pet Delivery</title>
        <meta
          name="Pet Delivery Worldwide"
          content="A brand all about coding passion and success"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <body className="h-screen w-screen overflow-hidden dark:bg-black dark:text-white bg-white text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
