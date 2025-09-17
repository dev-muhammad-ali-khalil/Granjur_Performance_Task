import "./globals.css";

export const metadata = {
  title: "Granjur Performance Task",
  description: "A performance task project built with Next.js and Material UI (MUI), implementing a single page based on a provided Figma design. The page is responsive with layouts for large desktop, desktop, tablet, and mobile viewports.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
