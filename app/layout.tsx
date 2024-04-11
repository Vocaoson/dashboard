'use client';
import '@/app/ui/global.css';
import { inter, lusitana } from './ui/fonts';
import { GoogleAnalytics, sendGAEvent } from '@next/third-parties/google'
import { useEffect } from 'react';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    sendGAEvent('EnterViaQR', {product_id: '1234'});
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      <GoogleAnalytics gaId="G-XQ1ZMK8FFV" />
    </html>
  );

}
