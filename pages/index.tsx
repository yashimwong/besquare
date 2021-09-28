import SideBar from "components/side-bar";
import type { NextPage } from "next";
import NavigationBar from "../components/navigation-bar";

const Home: NextPage = () => {
  return (
    <>
      <NavigationBar />
      <SideBar />
      <div className="flex mt-12 min-h-screen bg-gray-200">Contents</div>
    </>
  );
};

export default Home;
