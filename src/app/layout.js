import "./globals.css";

export const metadata = {
  title: "Arcbes - Architecture Studio",
  description: "Forward-thinking architecture studio turning bold visions into reality since 2010.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-satoshi bg-white text-[#1a1a1a] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
