import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="fa" dir='rtl'>
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
