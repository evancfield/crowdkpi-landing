import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://crowdkpi.com"),
  title: "CrowdKPI — Prediction Markets for Your Company",
  description:
    "Let your team bet on business outcomes. CrowdKPI surfaces what your people really think about KPIs — before the quarter ends.",
  openGraph: {
    title: "CrowdKPI",
    description: "Prediction markets for internal KPIs.",
    url: "https://crowdkpi.com",
    siteName: "CrowdKPI",
    images: [{ url: "/crowdkpi-icon.svg.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
