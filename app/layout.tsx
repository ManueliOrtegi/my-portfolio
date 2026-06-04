import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manuel Ortega - Software Engineer',
  description: 'Welcome to my portfolio! I am a passionate software engineer with expertise in web development, cloud computing, and software architecture. Explore my projects, experience, and skills to see how I can contribute to your next project or opportunity.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}