import { Container } from '@/components/Layout';
import '@/styles/fonts.css';
import '@/styles/globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nubank',
  description: 'Conceito do App Nubank pela Hcode Treinamentos desenvolvido durante o Hcode Lab',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Container>
          {children}
        </Container>
        </body>
    </html>
  );
}
