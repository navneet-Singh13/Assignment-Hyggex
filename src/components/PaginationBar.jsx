import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { GoHome } from "react-icons/go";
const PaginationBar = () => {
  return (
    <div className=" md:mt-28 mt-10 container mx-auto">
      <div className="flex items-center flex-wrap  ">
        <span className="hover:text-blue-700 hover:cursor-pointer text-gray-400">
          <GoHome size={30} />
        </span>{" "}
        <IoIosArrowForward size={30} />
        <span className="hover:text-blue-700  hover:cursor-pointer text-gray-400">
          FlashCard
        </span>{" "}
        <IoIosArrowForward size={30} />
        <span className="hover:text-blue-700  hover:cursor-pointer text-gray-400">
          Mathematics
        </span>{" "}
        <IoIosArrowForward size={30} />
        <span className="hover:text-blue-700  hover:cursor-pointer text-gray-400">
          Relation and Function{" "}
        </span>
      </div>

      <h1 className="md:text-3xl text-2xl mt-8 text-blue-700  font-semibold">
        {" "}
        Relation and Functions &nbsp; (Mathematics){" "}
      </h1>
    </div>
  );
};

export default PaginationBar;
