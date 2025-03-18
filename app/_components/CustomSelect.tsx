"use client";
import { useState } from "react";

export default function CustomSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("화성학의 기초");

  const options = ["화성학의 기초", "고급 화성학"];

  return (
    <div className="relative w-[350px] lg:w-[500px]">
      {/* 선택 영역 */}
      <div
        className="w-full h-[50px] text-[#666666] pl-5 pr-10 rounded-lg border border-white cursor-pointer flex items-center justify-between bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption}
        <span className="text-gray-500">▼</span>
      </div>

      {/* 옵션 목록 */}
      {isOpen && (
        <ul className="absolute left-0 w-full bg-white border border-gray-300 shadow-md rounded-lg mt-2 z-50">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-5 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
