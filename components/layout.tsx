import { ReactNode, useState } from "react";
import Head from "next/head";
import NavigationBar from "components/navigation-bar";
import SideBar from "components/side-bar";

type LayoutProps = {
  children: ReactNode;
  page_name: string;
};

const Layout = ({ children, page_name }: LayoutProps) => {
  const [show_sidebar, setShowSideBar] = useState(true);

  return (
    <>
      <Head>
        <title>Besquare | {page_name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-gray-200">
        <NavigationBar />
        <SideBar show={show_sidebar} />
        <div className="flex ml-72 mt-14 min-h-screen">
          <div className="bg-white mt-6 mx-4 py-4 px-6 rounded-md shadow-md w-full h-full">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
