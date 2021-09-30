import {
  LoginIcon as ExpandIcon,
  LogoutIcon as MinimizeIcon,
} from "@heroicons/react/solid";
import { MouseEventHandler } from "react";

type SidebarToggleProps = {
  is_sidebar_shown: boolean;
  handleClick: MouseEventHandler;
};

const SidebarToggle = ({
  is_sidebar_shown,
  handleClick,
}: SidebarToggleProps) => {
  return (
    <div
      onClick={handleClick}
      className="inline-flex items-center w-max px-4 py-1 rounded mx-4 my-3 h-7 bg-gray-900 hover:bg-gray-700 text-white text-sm shadow cursor-pointer"
    >
      {is_sidebar_shown ? (
        <>
          <ExpandIcon className="h-full mr-2" /> Collapse Sidebar
        </>
      ) : (
        <>
          <MinimizeIcon className="h-full mr-2" /> Expand Sidebar
        </>
      )}
    </div>
  );
};

export default SidebarToggle;
