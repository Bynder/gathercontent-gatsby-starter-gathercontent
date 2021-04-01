import * as React from "react"
import { Header } from './Header';
import { Footer } from './Footer';

import '../tailwind-setup.css';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />

      <style>{`
      body {
        font-family: 'IBM Plex Sans', sans-serif;
        color: #29333d;
      }
    `}</style>
    </>
  );
}

export { Layout };
