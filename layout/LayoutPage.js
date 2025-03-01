"use client";
import Header from "./Header";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

function LayoutPage({ children }) {
  const path = usePathname();

  const patHidden = ["/login", "/register", "/frogetpassword"];

  const shouldHideLayout = patHidden.includes(path);
  return (
    <div>
      <header className={`${shouldHideLayout ? "hidden" : ""}`}>
        <Header />
      </header>

      <main className="h-fit">{children}</main>

      <footer className={`${shouldHideLayout ? "hidden" : ""}`}>
        <Footer />
      </footer>
    </div>
  );
}

export default LayoutPage;
