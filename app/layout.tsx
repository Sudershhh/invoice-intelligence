// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { ClerkProvider } from "@clerk/nextjs";
// import Header from "@/components/Header";
// import { Toaster } from "react-hot-toast";
// import Footer from "@/components/Footer";
// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Invoice AI",
//   description:
//     "Invoice AI is a comprehensive supply chain management tool designed to streamline your operations, enhance visibility, and optimize efficiency.",
//   keywords: [
//     "Supply Chain",
//     "Management",
//     "Optimization",
//     "Logistics",
//     "Didero",
//   ],
// };

// export const viewport = {
//   width: "device-width",
//   initialScale: 1,
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <ClerkProvider afterSignOutUrl={"/"}>
//       <html lang="en">
//         <head>
//           <link rel="icon" href="/logo.svg" type="image/svg+xml" sizes="any" />
//         </head>

//         <body className={`${inter.className} bg-white`}>
//           <Header />

//           {children}

//           <Toaster position="top-center" />
//           <Footer />
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invoice AI - Streamline Your Supply Chain Management",
  description:
    "Invoice AI is a comprehensive supply chain management tool designed to streamline your operations, enhance visibility, and optimize efficiency.",
  keywords: [
    "Supply Chain",
    "Management",
    "Optimization",
    "Logistics",
    "Invoice AI",
    "Invoice Processing",
    "AI-powered",
    "Document Extraction",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.invoiceai.com/",
    siteName: "Invoice AI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Invoice AI - Revolutionize Your Document Processing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@invoiceai",
    creator: "@invoiceai",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl={"/"}>
      <html lang="en" className="h-full">
        <head>
          <link rel="icon" href="/logo.svg" type="image/svg+xml" sizes="any" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
        </head>
        <body
          className={`${inter.className} flex flex-col min-h-screen bg-[#F8F9FA]`}
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Toaster position="top-center" />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
