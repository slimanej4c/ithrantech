import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'IthranTech — Slimane Benmayouf | Full-Stack Developer', description: 'Independent full-stack developer. Web applications, SaaS products, AI and automation.', };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
