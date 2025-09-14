import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomThemeProvider from "@/components/providers/CustomThemeProvider";
import { NextIntlClientProvider } from "next-intl";
import { hasLocale } from "next-intl"
import {setRequestLocale} from "next-intl/server"
import {routing} from "@/i18n/routing"
import { notFound } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YinkCity",
  description: "trading platform where you can buy and sell products.",
};

export function generateStaticParams(){
  return routing.locales.map(locale => ({locale}))
}

export const viewport: Viewport = {
  maximumScale: 1,
  userScalable: false
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>
}>) {
  // get locale
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  } 
  
  setRequestLocale(locale)

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <CustomThemeProvider>{children}</CustomThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
