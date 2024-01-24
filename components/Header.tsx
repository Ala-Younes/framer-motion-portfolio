import Link from "next/link";

import Logo from "@/public/logo.svg";
import Socials from "./Socials";
const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row  items-center justify-between gap-y-6 py-8">
          {/* Logo */}
          <Link href={"/"}>
            <h2 className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-accent/50 via-orange-600/70 to-accent">
              Ala Younes
            </h2>
          </Link>
          {/* Socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
