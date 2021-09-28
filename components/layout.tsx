import { ReactNode, useState } from "react";
import NavigationBar from "components/navigation-bar";
import SideBar from "components/side-bar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [show_sidebar, setShowSideBar] = useState(true);

  return (
    <div className="bg-gray-200">
      <NavigationBar />
      <SideBar show={show_sidebar} />
      <div className="flex ml-60 mt-14 min-h-screen">Contents</div>
    </div>
  );
};

export default Layout;
