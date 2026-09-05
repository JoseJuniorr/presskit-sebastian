import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sebastian e o Farol — Press Kit / EPK',
  description: 'Press Kit oficial da banda Sebastian e o Farol (Campo Mourão, PR). Conheça a trajetória autoral, discografia, o single Zolpidem e o próximo EP Verniz.',
  generator: 'Next.js',
  applicationName: 'Sebastian e o Farol Press Kit',
  authors: [{ name: 'Sebastian e o Farol' }],
  keywords: ['Sebastian e o Farol', 'Rock Alternativo', 'Press Kit', 'Zolpidem', 'Verniz', 'Indie Rock Brasil'],
  openGraph: {
    title: 'Sebastian e o Farol — Press Kit / EPK',
    description: 'Zolpidem abre o capítulo que levará ao novo EP Verniz. Conheça a trajetória autoral, discografia e materiais de imprensa.',
    url: 'https://presskit-sebastian.vercel.app',
    siteName: 'Sebastian e o Farol',
    images: [
      {
        url: '/share-cover.jpg', // Certifique-se de ter essa imagem na pasta public
        width: 1200,
        height: 630,
        alt: 'Sebastian e o Farol - Press Kit',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sebastian e o Farol — Press Kit / EPK',
    description: 'Zolpidem abre o capítulo que levará ao novo EP Verniz.',
    images: ['/share-cover.jpg'],
  },
  icons: {
    icon: '/capa-zolpidem.jpg', // Usa a capa do Zolpidem como favicon correto na aba do navegador
    shortcut: '/capa-zolpidem.jpg',
    apple: '/capa-zolpidem.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
