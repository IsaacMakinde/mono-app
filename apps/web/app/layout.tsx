import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ma-Kin-Day",
  description: "A Website about Mr Makinde",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand has-text-centered">
                {/* <a className="navbar-item" href="../">
                  <strong>Create Turbo</strong>
                </a> */}
                <figure className="image is-96x96 no-image-background ">
                  <Image
                    alt="An image of a pair of glasses"
                    className="is-rounded"
                    height={300}
                    src="/pictures/glasses-logo-removebg-preview.png"
                    width={300}
                  />
                </figure>
                <span className="navbar-burger burger" data-target="navbarMenu">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div className="navbar-menu is-active" id="navbarMenu">
                <div className="navbar-end">
                  <a className="navbar-item" href="../">
                    About
                  </a>
                  <a className="navbar-item" href="/projects">
                    Projects
                  </a>
                  <a className="navbar-item is-active" href="/contact">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <section className="hero is-fullheight">{children}</section>
        {/* <footer className="footer"></footer> */}
      </body>
    </html>
  );
}
