import React from "react";
import { AiFillSound } from "react-icons/ai";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { MdOutlineLightbulb } from "react-icons/md";
import { RxEnterFullScreen } from "react-icons/rx";
import { VscDebugRestart } from "react-icons/vsc";

const Quiz = () => {
  return (
    <div className="container mx-auto">
      {/* navigation  */}

      <ul className="flex mt-20  font-semibold text-xl md:w-[40%] mx-auto justify-around">
        <li className="pb-3 hover:cursor-pointer   hover:border-b-2  hover:border-blue-700 hover:text-blue-700">
          Study
        </li>
        <li className="pb-3 hover:cursor-pointer   hover:border-b-2  hover:border-blue-700 hover:text-blue-700">
          Quiz
        </li>
        <li className="pb-3 hover:cursor-pointer   hover:border-b-2  hover:border-blue-700 hover:text-blue-700">
          Test
        </li>
        <li className="pb-3 hover:cursor-pointer   hover:border-b-2  hover:border-blue-700 hover:text-blue-700">
          Game
        </li>
        <li className="pb-3 hover:cursor-pointer   hover:border-b-2  hover:border-blue-700 hover:text-blue-700">
          Others
        </li>
      </ul>
      <div className="bg-gradient mt-10 md:w-[50%] mx-auto h-[400px] rounded-[30px]  flex-col justify-center ">
        <div className="flex justify-between p-4">
          <MdOutlineLightbulb size={40} color="white" />
          <AiFillSound size={40} color="white" />
        </div>
        <div className="text-white mt-32 text-4xl text-center ">
          9 + 6 + 7x - 3 + 2
        </div>
      </div>
      <div className="md:w-[50%] mt-1 h-[100px]  mx-auto flex-col justify-end">
        <div className=" flex mt-4 items-center justify-between py-4 px-3">
          <VscDebugRestart size={40} />
          <div className="flex items-center text-2xl gap-3 justify-between md:w-[30%]">
            <IoIosArrowDropleftCircle size={60} color="#051A91" />
            <p> 01/10 </p>
            <IoIosArrowDroprightCircle size={60} color="#051A91" />
          </div>
          <RxEnterFullScreen size={40} />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
