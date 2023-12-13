import React, { Dispatch, SetStateAction } from "react";
// import { AuthContext } from "@/providers/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";

import { FaRegEdit } from "react-icons/fa";
const Menu: React.FC<{ toggle: Dispatch<SetStateAction<boolean>> }> = ({
  toggle,
}) => {
  //   const { signOut } = useContext(AuthContext);

  return (
    <div
      className="absolute right-0 top-[150%] w-[220px] border border-[rgba(255,255,255,0.15)] bg-[rgba(0,0,0,0.9)] text-white before:absolute before:right-[15%] before:top-[-25px] before:border-b-[8px] before:border-l-[10px] before:border-r-[10px] before:border-b-[rgba(299,299,299)] before:border-l-transparent before:border-r-transparent before:pt-4 before:content-['']"
      onMouseOver={() => toggle(true)}
    >
      <ul>
        <li className="flex items-center gap-2  px-3 pb-3 pt-5">
          <FaRegEdit className="w-[15px] h-[15px]" />
          <span>Manage Profiles</span>
        </li>

        <li className="flex items-center gap-2 px-3 py-2">
          <FaRegUserCircle className="w-[15px] h-[15px]" />
          <span>Account</span>
        </li>
      </ul>

      <button
        className="mt-2 w-full border-t border-[rgba(255,255,255,0.15)] px-5 py-4"
        // onClick={signOut}
      >
        Sign out of Netflix
      </button>
    </div>
  );
};

export default Menu;
