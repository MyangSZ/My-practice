"use client";
import Image from "next/image";
import videoIcon from "@/assets/icons/videoIcon.png";
import assignmentIcon from "@assets/icons/assignmentIcon.png";
import problemIcon from "@assets/icons/problemIcon.png";
import liveSessionIcon from "@assets/icons/liveSessionIcon.png";
import { Triangle } from "phosphor-react";

export default function Learn() {
  return (
    <div
      className="flex flex-col text-white font-normal h-[1080px]
    justify-center items-center gap-36"
    >
      <div className="flex flex-col items-center text-[50px] leading-tight">
        <span>소리상상에서 </span>
        <span>배우는 방법</span>
        <span className="text-xl opacity-40">Learning Process</span>
      </div>

      <div className="flex flex-row items-center gap-5 leading-6">
        {/* icon 1 */}
        <div className="w-48 h-[350px] flex bg-opacity-25 justify-center">
          <div className="flex flex-col items-center gap-8">
            <span className="text-4xl font-semibold opacity-40">#01</span>
            <div className="bg-white bg-opacity-10 w-40 h-40 rounded-full flex justify-center items-center">
              <Image
                src={videoIcon}
                alt="Video Icon"
                className="w-[62px] relative"
              />
            </div>
            {/* explanation */}
            <span className=" whitespace-pre-line text-center">
              {`개념 정리
              동영상 강의로
            화성학 이론을 익힌다.`}
            </span>
          </div>
        </div>

        {/* arrow */}
        <div className="flex flex-row">
          <Triangle size={25} weight="fill" className="rotate-90 opacity-30" />
          <Triangle size={25} weight="fill" className="rotate-90" />
        </div>

        {/* icon 2 */}
        <div className="w-48 h-[350px] flex bg-opacity-25 justify-center">
          <div className="flex flex-col items-center gap-8">
            <span className="text-4xl font-semibold opacity-40">#02</span>
            <div className="bg-white bg-opacity-10 w-40 h-40 rounded-full flex justify-center items-center">
              <Image
                src={assignmentIcon}
                alt="Video Icon"
                className="w-[62px] relative"
              />
            </div>
            {/* explanation */}
            <span className=" whitespace-pre-line text-center">
              {`과제 다운로드 및
              해결 후, 해결한 과제를
              업로드 한다.`}
            </span>
          </div>
        </div>

        {/* arrow */}
        <div className="flex flex-row">
          <Triangle size={25} weight="fill" className="rotate-90 opacity-30" />
          <Triangle size={25} weight="fill" className="rotate-90" />
        </div>

        {/* icon 3 */}
        <div className="w-48 h-[350px] flex bg-opacity-25 justify-center">
          <div className="flex flex-col items-center gap-8">
            <span className="text-4xl font-semibold opacity-40">#03</span>
            <div className="bg-white bg-opacity-10 w-40 h-40 rounded-full flex justify-center items-center">
              <Image
                src={problemIcon}
                alt="Video Icon"
                className="w-[62px] relative"
              />
            </div>
            {/* explanation */}
            <span className=" whitespace-pre-line text-center">
              {`실전 문제 풀이 강의로
              실제 문제를 해결하는
              방법을 배운다`}
            </span>
          </div>
        </div>

        {/* arrow */}
        <div className="flex flex-row">
          <Triangle size={25} weight="fill" className="rotate-90 opacity-30" />
          <Triangle size={25} weight="fill" className="rotate-90" />
        </div>

        {/* icon 3 */}
        <div className="w-48 h-[350px] flex bg-opacity-25 justify-center">
          <div className="flex flex-col items-center gap-8">
            <span className="text-4xl font-semibold opacity-40">#04</span>
            <div className="bg-white bg-opacity-10 w-40 h-40 rounded-full flex justify-center items-center">
              <Image
                src={liveSessionIcon}
                alt="Video Icon"
                className="w-[62px] relative"
              />
            </div>
            {/* explanation */}
            <span className=" whitespace-pre-line text-center">
              {`추가 질문이 있을 경우,
              실시간 세션을 통해
              직접 강사에게 배운다.`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
