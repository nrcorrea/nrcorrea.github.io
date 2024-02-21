import "./globals.css";

export const metadata = {
  title: "Nicholas Correa's Portfolio",
  description: "Nicholas Correa's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
