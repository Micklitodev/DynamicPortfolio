import { Html, Head, Main, NextScript } from "next/document";
import Sidebar from "@/component/sidebar";
const Document = (): JSX.Element => {
  return (
    <Html lang="en">
      <Head />
      <Sidebar />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
