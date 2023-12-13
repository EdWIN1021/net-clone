import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FiBell } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const links = [
  { id: 1, title: "Home", path: "/browse" },
  { id: 2, title: "TV Shows", path: "/browse/tv-shows" },
  { id: 3, title: "Movies", path: "/browse/movies" },
  { id: 4, title: "New & Popular", path: "/browse/new-popular" },
  { id: 5, title: "My List", path: "/browse/my-list" },
  { id: 6, title: "Browse by Languages", path: "/browse/languages" },
];

const Header = () => {
  const [open, toggle] = useState(false);

  return (
    <div className="sticky top-0 z-50 flex items-center bg-black px-[4%] py-4 text-sm text-white">
      <img
        className="cursor-pointer"
        src="/logo.svg"
        width={92.5}
        height={30}
        alt=""
      />

      <ul className="ml-12 mr-2 hidden min-w-[140px] flex-1 gap-5 md:flex">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              className={clsx(
                "rounded  text-[1vw] transition duration-200 hover:text-[#b3b3b3]",
                {
                  // "font-bold": pathname === link.path,
                }
              )}
              to={"/"}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="ml-8 flex flex-1 items-center gap-2 md:hidden">
        <span>Browse</span>
        <IoIosArrowDown className="w-[2vw]" />
      </div>

      <div className="flex items-center gap-5">
        <IoIosSearch className="w-[20px] h-[20px] cursor-pointer" />
        <FiBell className="w-[20px] h-[20px] cursor-pointer" />

        <div
          className="group relative flex cursor-pointer  items-center"
          onMouseEnter={() => toggle(true)}
          onMouseLeave={() => toggle(false)}
        >
          <img
            className="h-8 w-8 rounded "
            src="/avatar.png"
            width={32}
            height={32}
            alt="avatar"
          />
          <IoIosArrowUp className="ml-2 w-[20px] h-[20px] duration-500 group-hover:rotate-180" />
          {open && <Menu toggle={toggle} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
