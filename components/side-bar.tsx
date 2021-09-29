import Link from "next/link";
import { Transition } from "@headlessui/react";

type SideBarItemsProps = {
  name: string;
  to: string;
};

const SideBarItems = ({ name, to }: SideBarItemsProps) => {
  return (
    <Link href={to} passHref>
      <div className="cursor-pointer bg-gray-200 rounded-md w-full px-3 py-2 mb-3">
        {name}
      </div>
    </Link>
  );
};

type SideBarProps = {
  show: boolean;
};

const sidebar_items = [
  {
    name: "Welcome",
    to: "/",
  },
  {
    name: "Programming Basics",
    to: "/programming-basics",
  },
  {
    name: "Introduction to the Web",
    to: "/intro-to-web",
  },
  {
    name: "HTML5",
    to: "/html",
  },
  {
    name: "CSS3",
    to: "/css",
  },
  {
    name: "JavaScript",
    to: "/javascript",
  },
];

const SideBar = ({ show }: SideBarProps) => {
  return (
    <Transition.Root show={show}>
      <Transition.Child enter="transform transition ease-in">
        <div className="fixed flex flex-col items-center w-72 min-h-screen bg-gray-900 pt-4 px-4">
          {sidebar_items.map((item) => {
            return <SideBarItems key={item.name} {...item} />;
          })}
        </div>
      </Transition.Child>
    </Transition.Root>
  );
};

export default SideBar;
