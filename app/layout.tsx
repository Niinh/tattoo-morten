import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Morten Tattoo | Fine Line & Tatuagens Autorais',
  description: 'Estúdio especializado em tatuagens Fine Line e artes autorais. Técnica precisa, designs exclusivos e atendimento personalizado.',
  keywords: 'tatuagem, fine line, arte autoral, estúdio, tattoo, pontilhismo, exclusiva',
  authors: [{ name: 'Morten Tattoo' }],
  creator: 'Morten Tattoo',
  openGraph: {
    title: 'Morten Tattoo | Fine Line & Tatuagens Autorais',
    description: 'Estúdio especializado em tatuagens Fine Line e artes autorais. Técnica precisa, designs exclusivos e atendimento personalizado.',
    url: 'https://mortentattoo.com',
    siteName: 'Morten Tattoo',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-verification-token',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}