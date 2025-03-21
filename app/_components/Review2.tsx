"use client";

import { Potta_One } from "next/font/google";

import { Diamond } from "phosphor-react";

// Potta One 폰트 설정 (최적화 적용)
const pottaOne = Potta_One({
  subsets: ["latin"],
  weight: "400", // Potta One은 400만 지원
  display: "swap",
});

// interface ReviewProps {
//   name: string;
//   description: string;
//   imageSrc: string;
// }

// const reviews: ReviewProps[] = [
//   {
//     name: "박OO 수강생",
//     description: "클래식 화성학 1기 수강생",
//     imageSrc: "/review1.png", // 실제 이미지 경로로 변경
//   },
//   {
//     name: "박OO 수강생",
//     description: "클래식 화성학 1기 수강생",
//     imageSrc: "/review2.png", // 실제 이미지 경로로 변경
//   },
//   {
//     name: "박OO 수강생",
//     description: "클래식 화성학 1기 수강생",
//     imageSrc: "/review3.png", // 실제 이미지 경로로 변경
//   },
// ];

export default function Review() {
  return (
    <div className="text-white font-normal flex flex-row mb-40">
      {/* title */}
      <p className="flex flex-col whitespace-pre-line px-5 md:px-10 lg:px-20 text-4xl">
        <span>
          상상<span className="text-accent-500">上上</span>해 낸
        </span>
        <span>당신이</span>
        <span>우리에게</span>
        <span>말했다</span>
        <span className="text-xl opacity-40 font-extralight pt-1">Reviews</span>
      </p>

      {/* 리뷰 카드 */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center mb-0">
          <div className="w-[440px] h-[240px] bg-[#303D58] rounded-md p-4 flex flex-col justify-center z-10">
            <div className="text-primary-900 flex items-start">
              <p className={`${pottaOne.className} text-7xl leading-3 mt-10`}>
                “
              </p>
            </div>
            <div className="text-lg px-4 mb-5">
              <span>
                강의에 대한 평가 내용이 들어갑니다. 이내용은 길어질수도 있고
                짧아질 수 도 있습니다. 한번에 몇명이나 표시하는게
                좋을까요..강의에 대한 평가 내용이 들어갑니다. 이내용은
                길어질수도 있고 짧아질 수 도 있습니다.한번에 몇명이나 표시하는게
                좋을까요..강의에 대한 평가 내용이 들어갑니다.
              </span>
            </div>
          </div>

          {/* 역삼각형 만들기. 말풍선이랑 이어지는 삼각형 */}

          {/* <div className="w-[20px] h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[18px] border-t-white rounded-b-fulll opacity-10 mb-10"></div> */}

          {/* <div className="w-[18px] h-[18px] rotate-45 rounded-br-[3px] bg-white opacity-10 box-border -mt-[10px] mb-10"></div> */}

          <Diamond
            size={30}
            weight="fill"
            className="scale-x-[1.3] scale-y-150 -mt-[18px] mb-10 opacity-10"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="w-[120px] h-[120px] bg-white rounded-full"></div>
          <div className="text-center">
            <p>박OO 수강생</p>
            <p>클래식 화성학 1기 수강생</p>
          </div>
        </div>
      </div>
    </div>
  );
}
