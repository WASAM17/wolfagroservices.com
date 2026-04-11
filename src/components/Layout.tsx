import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  fullWidthHero?: boolean;
}

const Layout = ({ children, fullWidthHero }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-wolf-cream">
      <Header />
      <main className={`flex-grow pb-16 lg:pb-0 ${fullWidthHero ? '' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
