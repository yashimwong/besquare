import Link from "next/link";
import { Transition } from "@headlessui/react";

type SideBarItemsProps = {
  name: string;
  to: string;
};

const SideBarItems = ({ name, to }: SideBarItemsProps) => {
  return (
    <Link href={to} passHref>
      <div className="cursor-pointer bg-blue-300 w-10/12 rounded-md p-2">
        {name}
      </div>
    </Link>
  );
};

type SideBarProps = {
  show: boolean;
};

const SideBar = ({ show }: SideBarProps) => {
  return (
    <Transition.Root show={show}>
      <Transition.Child enter="transform transition ease-in">
        <div className="fixed flex flex-col items-center w-60 min-h-screen bg-gray-900">
          Side Bar
          <SideBarItems name="Item1" to="/" />
        </div>
      </Transition.Child>
    </Transition.Root>
  );
};

export default SideBar;
