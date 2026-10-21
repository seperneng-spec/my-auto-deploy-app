export const metadata = {
  title: 'Auto Deploy App',
  description: 'Created for automated deployment workflow',
}

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}

