import { Sora } from "next/font/google";
import TopLeftImage from "./TopLeftImage";
import Nav from "./Nav";
import Header from "./Header";

// ! We already have sora inside the tailwind config file ...
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <TopLeftImage />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
