// "use client";

// import { useState } from "react";

// const courseData = [
//   {
//     title: "화성학의 기초",
//     lectures: [],
//   },
//   {
//     title: "화성학의 기초2",
//     lectures: [
//       "01. 동영상 강의명이 들어갑니다.",
//       "02. 동영상 강의명이 들어갑니다.",
//       "03. 동영상 강의명이 들어갑니다.",
//     ],
//   },
//   {
//     title: "화성학 실습",
//     lectures: [],
//   },
//   {
//     title: "화성학 실습",
//     lectures: [],
//   },
// ];

// const CourseAccordion = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleAccordion = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="bg-[#1E2A47] text-white p-6 w-[400px] rounded-md">
//       <h2 className="text-xl font-semibold mb-4">교육과정 안내</h2>
//       <div className="flex flex-col gap-2">
//         {courseData.map((course, index) => (
//           <div key={index} className="border border-white rounded-md">
//             <button
//               className="w-full flex justify-between items-center p-4 bg-[#2A3A5F] text-lg font-semibold"
//               onClick={() => toggleAccordion(index)}
//             >
//               {course.title}
//               <span className="text-sm">
//                 {openIndex === index ? "(닫기)" : "(열기)"}
//               </span>
//             </button>
//             {openIndex === index && course.lectures.length > 0 && (
//               <div className="bg-[#1E2A47] p-4 border-t border-white">
//                 {course.lectures.map((lecture, idx) => (
//                   <p key={idx} className="text-sm leading-6">
//                     {lecture}
//                   </p>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CourseAccordion;

"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

// 강의 데이터 타입 정의
interface CourseType {
  title: string;
  lectures: string[];
}

// 강의 데이터 목록
const courseData: CourseType[] = [
  {
    title: "화성학의 기초",
    lectures: [],
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

export default function CourseAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#1E2A47] text-white p-6 w-[400px] rounded-md">
      <h2 className="text-xl font-semibold mb-4">교육과정 안내</h2>
      <div className="flex flex-col gap-2">
        {courseData.map((course, index) => (
          <div key={index} className="border border-white rounded-md">
            <button
              className="w-full flex justify-between items-center p-4 bg-[#2A3A5F] text-lg font-semibold"
              onClick={() => toggleAccordion(index)}
            >
              {course.title}
              {/* <span className="text-sm">
                {openIndex === index ? "(닫기)" : "(열기)"}
              </span> */}

              <ChevronDownIcon
                className={`w-6 h-6 text-white transform transition-transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {openIndex === index && course.lectures.length > 0 && (
              <div className="bg-[#1E2A47] p-4 border-t border-white">
                {course.lectures.map((lecture, idx) => (
                  <p key={idx} className="text-sm leading-6">
                    {lecture}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
