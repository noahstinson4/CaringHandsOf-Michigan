import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Caring Hands of Michigan | Home Care Services",
  description: "Compassionate non-medical in-home care for Michigan families.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
