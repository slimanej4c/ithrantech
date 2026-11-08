import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'IthranTech — Slimane Benmayouf | Développeur Full-Stack', description: 'Développeur full-stack indépendant au Canada. Applications web, produits SaaS, intelligence artificielle et automatisation.', };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="fr"><body>{children}</body></html>; }
