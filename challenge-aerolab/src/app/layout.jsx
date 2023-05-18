import '../styles/global.css';

export const metadata = {
  title: 'Challenge Aerolab',
  description: 'Challege de Aeroab de maxi ivan',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
