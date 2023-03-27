import { useEffect } from "react";

import Footer from "./footer";
import Header from "./header";
import Meta from "./meta";
import scrollFadeUp from "./scrollFadeUp";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  useEffect(() => {
    scrollFadeUp();
  }, []);
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Header />
        <main>{children}</main>
        <div className="js-show-on-scroll">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
