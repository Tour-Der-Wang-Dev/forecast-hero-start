
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
  logo: {
    src: string;
    alt: string;
  };
  navigationLinks: {
    text: string;
    href: string;
  }[];
  footerInfo: {
    contact: string;
    copyright: string;
  };
}

const MainLayout = ({ children, logo, navigationLinks, footerInfo }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header logo={logo} navigationLinks={navigationLinks} />
      <main className="flex-1">
        {children}
      </main>
      <Footer contact={footerInfo.contact} copyright={footerInfo.copyright} />
    </div>
  );
};

export default MainLayout;

