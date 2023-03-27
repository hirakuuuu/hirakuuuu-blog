import { useEffect } from "react";

import Footer from "./footer";
import Header from "./header";
import Meta from "./meta";
import ScrollFadeUp from "./scroll-fade-up";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  useEffect(() => {
    ScrollFadeUp();
  }, []);
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
