import { ReactNode, useState } from "react";
import Head from "next/head";
import NavigationBar from "components/navigation-bar";
import SideBar from "components/side-bar";
import SidebarToggle from "components/sidebar-toggle";
import Footer from "components/footer";
import classNames from "classnames";

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
        <div
          className={classNames("flex flex-col mt-14 min-h-screen", {
            "ml-72": show_sidebar,
          })}
        >
          <SidebarToggle
            is_sidebar_shown={show_sidebar}
            handleClick={() => setShowSideBar(!show_sidebar)}
          />
          <div className="bg-white mx-4 py-4 px-6 rounded-md shadow-md h-full">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
