import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordian = ({ ques }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="border-blue-700 border md:text-sm text-[10px] items-center text-sm m-3 p-3 md:w-[50%] border-1 flex justify-between  ">
        <p className="md:text-sm text-[15px]">{ques}</p>
        {!isOpen && (
          <IoIosArrowDown
            className=" cursor-pointer"
            size={30}
            onClick={() => setIsOpen((prev) => !prev)}
          />
        )}
        {isOpen && (
          <IoIosArrowUp
            className=" cursor-pointer"
            size={30}
            onClick={() => setIsOpen((prev) => !prev)}
          />
        )}
      </div>
      {isOpen && (
        <div className="m-3 p-3 md:w-[50%] md:text-sm text-[15px] mt-4">
          Lorem, ipsum dolor sit amet cccusantium nam. Dolorem error accusamus
          rerum nemo.
        </div>
      )}
    </div>
  );
};

export default Accordian;
