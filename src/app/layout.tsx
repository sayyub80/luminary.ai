import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const IBM_Plex = IBM_Plex_Mono({
  subsets:["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "Luminary AI | Intelligent Image Transformation Studio",
  description: "Transform your images with next-generation AI tools. Enhance photos, remove backgrounds, erase objects, and unlock creative possibilities with our advanced image editing platform.",
  keywords: [
    "Chromaforge AI",
    "AI image editor",
    "photo enhancement",
    "background removal",
    "image editing",
    "AI photo tools",
    "image transformation",
    "object removal",
    "photo editing platform",
  ],
  openGraph: {
    title: "Chromaforge AI | Intelligent Image Transformation Studio",
    description: "Transform your images with next-generation AI tools. Enhance photos, remove backgrounds, erase objects, and unlock creative possibilities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={
      {
        variables:{colorPrimary:'#624cf5'}
      }
    }>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
