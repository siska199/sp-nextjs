import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import favicon from '/public/favicon.ico';
import '@/app/_styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Custome Title',
  description: 'Custome description',
  icons: [{ rel: 'icon', url: favicon.src }],
};

type TPropsRootLayout = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = (props: TPropsRootLayout) => {
  const { children } = props;

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};
export default RootLayout;
