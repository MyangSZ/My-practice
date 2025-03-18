"use client";
import Image from "next/image";
import Classimg from "../../../assets/images/classimg.jpg";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Class() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const courseData = [
    {
      title: "화성학의 기초",
      lectures: [
        "01. 동영상 강의명이 들어갑니다.",
        "02. 동영상 강의명이 들어갑니다.",
        "03. 동영상 강의명이 들어갑니다.",
      ],
    },
    {
      title: "화성학의 기초2",
      lectures: [
        "01. 동영상 강의명이 들어갑니다.",
        "02. 동영상 강의명이 들어갑니다.",
        "03. 동영상 강의명이 들어갑니다.",
      ],
    },
    {
      title: "화성학 실습",
      lectures: [],
    },
    {
      title: "화성학 실습",
      lectures: [],
    },
  ];

  return (
    <div className="h-[1080px] flex flex-col justify-center items-center gap-5">
      <div className="flex gap-10 w-[700px] lg:w-[1080px]">
        <div className="flex flex-col justify-start gap-8">
          <Image
            src={Classimg}
            alt="Logo"
            className="w-[400px] lg:w-[660px] h-[400px] flex items-start rounded-lg object-cover object-top"
          />
          <span className="text-white font-normal lg:text-xl text-lg">
            <li>수강기간 : </li>
            <li>수강인원 : </li>
            <li>강사 : </li>
          </span>
        </div>

        <div className="w-[500px] text-white flex flex-col gap-2">
          {/* 교육과정안내 */}
          <span className="text-2xl font-normal">교육과정 안내</span>
          {courseData.map((course, index) => (
            <div key={index} className="relative w-[350px] lg:w-[500px]">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full h-[50px] px-5 rounded-sm border border-white text-white font-normal text-left flex justify-between items-center"
              >
                {course.title}
                <ChevronDownIcon
                  className={`w-6 h-6 text-white transform transition-transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {openIndex === index && course.lectures.length > 0 && (
                <div className="border border-white p-4 mt-1 rounded-sm">
                  {course.lectures.map((lecture, idx) => (
                    <p key={idx} className="text-md leading-6">
                      {lecture}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* 드롭다운 리스트 */}
          {/* {isOpen && (
            <ul
              className="absolute left-0 mt-1 w-full bg-white border border-gray-300
              rounded-md shadow-lg overflow-hidden transition-opacity opacity-100 z-10 text-muted-400 font-semibold"
            >
              <li
                className="px-5 py-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedCourse("화성학의 기초");
                  setIsOpen(false);
                }}
              >
                화성학의 기초
              </li>
              <li
                className="px-5 py-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedCourse("고급 화성학");
                  setIsOpen(false);
                }}
              >
                고급 화성학
              </li>
            </ul>
          )} */}
        </div>

        {/* <select
              name="class-name"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="w-[350px] lg:w-[500px] h-[50px] text-[#666666] pl-5 rounded-lg border-white bg-none appearance-none after:content-['▼'] after:absolute after:right-5"
            >
              <option value="화성학의 기초">화성학의 기초</option>
              <option value="고급 화성학">고급 화성학</option>
            </select> */}
        {/* Heroicons 화살표 아이콘 */}
        {/* <ChevronDownIcon className="absolute right-4 top-1/2 w-6 h-6 text-black transform -translate-y-1/2 pointer-events-none" />
          </div> */}

        {/* <div className="border border-solid rounded-sm font-normal w-[350px] lg:w-[500px] h-[340px] p-4"> */}
        {/* <span>{selectedCourse}</span> */}
        {/* <span>01. 동영상 강의명</span> */}
        {/* </div> */}
        {/* <div className="flex justify-center">
          <button
            className="text-center w-[350px] lg:w-[500px] h-14 bg-white
              rounded-sm bg-yellow text-black hover:bg-primary-800 hover:text-white"
          >
            강의 자세히 보러가기
          </button>
        </div> */}
      </div>
    </div>
  );
}
