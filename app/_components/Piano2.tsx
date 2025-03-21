"use client";

import { useState } from "react";

interface Key {
  color: "white" | "black";
  content: string;
}
export default function Piano2() {
  const keys: Key[] = [
    {
      color: "white",
      content: "검정 건반을 눌러주세요",
    },
    {
      color: "black",
      content: "1. 개념 정리 동영상 강의로 화성학 이론을 익힌다.",
    },
    {
      color: "white",
      content: "검정 건반을 눌러주세요",
    },
    {
      color: "black",
      content: "2. 실전 문제풀이 강의로 실제 문제를 해결하는 방법을 배운다",
    },
    {
      color: "white",
      content: "검정 건반을 눌러주세요",
    },
    { color: "white", content: "검정 건반을 눌러주세요" },
    {
      color: "black",
      content: "3. 과제 다운로드 및 해결 후, 해결한 과제를 업로드 한다.",
    },
    { color: "white", content: "검정 건반을 눌러주세요" },
    {
      color: "black",
      content: "4. 과제 다운로드 및 해결 후, 해결한 과제를 업로드 한다.",
    },
    { color: "white", content: "검정 건반을 눌러주세요" },
    {
      color: "black",
      content: "5. 과제 다운로드 및 해결 후, 해결한 과제를 업로드 한다.",
    },
    { color: "white", content: "검정 건반을 눌러주세요" },
  ];

  const [selectedContent, setSelectedContent] = useState<string | null>(null);

  const handleButtononClick = (content: string) => {
    setSelectedContent(content);
  };

  return (
    <div className="flex items-center gap-20 mb-20">
      <div className="flex flex-col justify-center items-end px-10 pb-10">
        {keys.map((key, index) => (
          <div
            key={index}
            className={`relative cursor-pointer ${
              key.color === "white"
                ? "w-50 h-14 bg-white border border-gray-300 z-10"
                : "w-30 h-10 bg-black text-white z-20 -my-5 "
            }`}
            onClick={() => handleButtononClick(key.content)}
          ></div>
        ))}
      </div>
      <div className="w-[500px] h-[500px] bg-white flex justify-center items-center font-bold text-4xl px-10">
        {selectedContent}
      </div>
    </div>
  );
}
