import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"],
});

export const metadata = {
  title: "Swaraj Harode | Web Developer",
  description: "Portfolio website of Swaraj Harode",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>

        <title>Swaraj Harode | Full-Stack Web Developer from India</title>

        <meta
          name="description"
          content="Portfolio of Swaraj Harode – full-stack web developer and B.Tech Computer Science student from Nagpur, India. Explore services, projects, skills, and ways to connect with Swaraj for collaborations and opportunities."
        />

        <link rel="canonical" href="https://swarajharode.com/" />

        <meta
          name="keywords"
          content="Swaraj Harode, Web Developer, Full Stack, Portfolio, JavaScript, React, Node.js, Nagpur, India, Projects, Services, UI/UX"
        />

        <meta name="author" content="Swaraj Harode" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
