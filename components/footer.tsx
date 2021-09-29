import Link from "next/link";
import { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <div className="fixed bottom-0 bg-white shadow w-full py-3 px-4 text-xs flex justify-end">
      <div className="">
        Crafted by
        <Link href="https://yashimwong.com" passHref>
          <span className="p-1 bg-gray-700 ring-gray-400 ring-2 rounded-md ml-1 text-white shadow cursor-pointer">
            Yashim Wong
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
