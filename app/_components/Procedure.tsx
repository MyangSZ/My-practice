// export default function Procedure() {
//   return (
//     <div className="flex flex-row items-center gap-20">
//       <div className="my-10 px-10 pb-10 flex flex-col gap-3">
//         <div className="w-[200px] bg-red-600 h-[80px] rounded-lg flex items-center pl-5 text-white font-bold text-2xl transition-transform transform-gpu hover:scale-110 active:scale-105">
//           <span>도</span>
//         </div>
//         <div className="w-[220px] bg-orange-500 h-[80px] rounded-lg flex items-center pl-5 text-white font-bold text-2xl">
//           <span>레</span>
//         </div>
//         <div className="w-[240px] bg-yellow-500 h-[80px] rounded-lg flex items-center pl-5 text-white font-bold text-2xl">
//           <span>미</span>
//         </div>
//         <div className="w-[260px] bg-green-500 h-[80px] rounded-lg flex items-center pl-5 text-white font-bold text-2xl">
//           <span>파</span>
//         </div>
//         <div className="w-[280px] bg-blue-700 h-[80px] rounded-lg flex items-center pl-5 text-white font-bold text-2xl">
//           <span>솔</span>
//         </div>
//         <div className="w-[300px] bg-indigo-950 h-[80px] rounded-lg flex items-center pl-5 text-white font-bold text-2xl">
//           <span>라</span>
//         </div>
//         <div className="w-[320px] bg-violet-700 h-[80px] rounded-lg flex items-center pl-5 text-white font-bold text-2xl">
//           <span>시</span>
//         </div>
//         <div className="w-[340px] bg-red-600 h-[80px] rounded-lg flex items-center pl-5 text-white font-bold text-2xl">
//           <span>도</span>
//         </div>
//       </div>
//       <div className="w-[500px] h-[500px] bg-white rounded-xl"></div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";

export default function Procedure() {
  const buttonStyle =
    "h-[80px] rounded-lg flex items-center pl-5 text-white font-bold text-2xl transition-transform transform-gpu hover:scale-110 active:scale-105";

  const buttonData = [
    {
      label: "도",
      width: "w-[200px]",
      bg: "bg-red-600",
      content: "개념 정리 동영상 강의로 화성학 이론을 익힌다.",
    },
    {
      label: "레",
      width: "w-[220px]",
      bg: "bg-orange-500",
      content: "실전 문제 풀이 강의로 실제 문제를 해결하는 방법을 배운다",
    },
    {
      label: "미",
      width: "w-[240px]",
      bg: "bg-yellow-500",
      content: "과제 다운로드 및 해결 후, 해결한 과제를 업로드 한다.",
    },
    {
      label: "파",
      width: "w-[260px]",
      bg: "bg-green-500",
      content: "전문가의 채점 및 피드백을 받아 실력을 향상시킨다.",
    },
    {
      label: "솔",
      width: "w-[280px]",
      bg: "bg-blue-700",
      content:
        "추가 질문이 있을 경우, 실시간 세션을 통해 직접 강사에게 배운다 (Comming Soon)",
    },
    { label: "라", width: "w-[300px]", bg: "bg-indigo-950", content: "" },
    { label: "시", width: "w-[320px]", bg: "bg-violet-700", content: "" },
    { label: "도", width: "w-[340px]", bg: "bg-red-600", content: "" },
  ];

  const [selectedContent, setSelectedContent] = useState<string | null>(null);

  const handleButtononClick = (content: string) => {
    setSelectedContent(content);
  };

  return (
    <div className="flex flex-row items-center gap-20">
      <div className="my-10 px-10 pb-10 flex flex-col gap-3">
        {buttonData.map((button, index) => (
          <button
            key={index}
            className={`${button.width} ${button.bg} ${buttonStyle}`}
            onClick={() => handleButtononClick(button.content)}
          >
            <span>{button.label}</span>
          </button>
        ))}
      </div>
      <div className="w-[500px] h-[500px] bg-white rounded-xl flex justify-center items-center px-10">
        {selectedContent && <span className="text-3xl">{selectedContent}</span>}
      </div>
    </div>
  );
}
