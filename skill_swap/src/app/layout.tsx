import type { Metadata } from "next";
import "@/app/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import Header from "@/frontend/Components/Header";

export const metadata: Metadata = {
  title: "skill_swap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex  min-h-screen flex-col ">
              <Header />
            <main className="flex flex-1 flex-col px-4 pt-10 xl:px-8">{children}</main>
            </div>
            
         <Toaster />
          </ThemeProvider>
      </body>
    </html>
  );
}
