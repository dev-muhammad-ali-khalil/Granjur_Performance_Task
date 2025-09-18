import "./globals.css";
import Sidebar from './components/Sidebar/Sidebar';

export const metadata = {
  title: "Granjur Performance Task",
  description: "A performance task project built with Next.js and Material UI (MUI), implementing a single page based on a provided Figma design. The page is responsive with layouts for large desktop, desktop, tablet, and mobile viewports.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Sidebar />
          {children}
        </div>
      </body>
    </html >
  );
}