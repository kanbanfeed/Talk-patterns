import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Talk Patterns</title>
        <meta name="description" content="A private collection of the sentences people use when they’ve decided you’re losing." />
      </head>
      <body>{children}</body>
    </html>
  );
}
