import { Inter as FontSans } from "next/font/google"
import { cn } from '@/lib/utils'
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}
      >
        
        <main className="container mx-auto pt-5">
          {children}
        </main>

      </body>
    </html>
  );
}
