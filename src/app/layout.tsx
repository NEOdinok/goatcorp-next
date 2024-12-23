import { cn } from "@/lib/utils";
import { Providers } from "@/providers";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

import favicon from "./favicon.ico";
import "./globals.css";

const roboto_mono = Roboto_Mono({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "ГОАТ.КОРП™",
  description: "Страшные вещи для злых людей",
  icons: {
    icon: favicon.src,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("antialiased", roboto_mono.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
