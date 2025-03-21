// import Image from "next/image";

export default function Features() {
  return (
    <div className="relative h-[1080px] text-white font-normal">
      {/* 해당 컴포넌트에만 배경 이미지 및 투명도 적용 */}
      <div className="absolute inset-0 bg-FeaturesImage bg-cover before:absolute before:inset-0 before:bg-[#0B1C3D] before:opacity-65 before:content-['']">
        {/* title */}
        <div className="relative flex flex-row mx-20 pt-32 gap-[180px]">
          <div className="text-4xl flex flex-col">
            <span>
              상상<span className="text-accent-500">上上</span>을
            </span>
            <span>
              상상<span className="text-accent-500">想像</span>하는
            </span>
            <span>당신에게,</span>
            <span>소리상상.</span>
          </div>

          <div className="flex flex-col gap-28 w-[1400px] h-[860px] tracking-tighter px-10">
            {/* text 1 */}
            <div className="text-lg flex flex-col">
              <span>
                {` "...학원을 다니기엔 시간이 맞지 않고, 독학하려니 채점도 안 되고,
                맞게 하고 있는지도 모르겠어요..."`}
              </span>
              <span className="text-sm">10대 에중/예고 진학생</span>
              <span className="text-accent-500 text-2xl font-semibold pt-[30px]">
                대한민국 최초의 온라인 클래식 화성학 교육
              </span>
              <span className=" whitespace-pre-line">
                {`기존에는 대면 강의가 대부분이었던 클래식 기반 화성학을 이제 온라인에서도 배울 수 있습니다.
              시간과 장소의 제약 없이, 여러분에게 맞춘 수업 진행으로 더 깊이있게 이해할 수 있습니다.`}
              </span>
              <span className="text-accent-500 text-2xl font-semibold pt-[30px]">
                서울대 작곡과, 서울예고 출신 20년 경력 강사의 고품질 강의
              </span>
              <span className=" whitespace-pre-line">
                {`20여년 동안의 강의에서 인지한 노하우를 바탕으로 전문가의 꼼꼼한 지도와 채점 시스템으로
                입시를 준비하는 학생부터 실력을 키우고 싶은 음악가까지 모두에게 최적의 환경을 제공합니다.`}
              </span>
            </div>

            {/* text 2 */}
            <div className="text-lg flex flex-col items-end">
              <span>
                {` "...문제에 대한 피드백을 받는 게 어려워서 계속 미루고 있어요..."`}
              </span>
              <span className="text-sm">20대, 작곡 새내기</span>
              <span className="text-accent-500 text-2xl font-semibold pt-[30px]">
                단순한 강의가 아닌, 실전 피드백 중심 교육
              </span>
              <span className=" whitespace-pre-line">
                {`화성학은 단순히 개념을 암기하는 것이 아니라, 실제 문제를 풀고 피드백을 받아야 실력이 향상됩니다.
                소리상상에서는 직접 푼 과제를 제출하고 전문가의 첨삭과 피드백을 받을 수 있습니다.`}
              </span>
            </div>

            {/* text 3 */}
            <div className="text-lg flex flex-col ">
              <span>
                {`“...화성학을 좀더 공부하고 싶지만 어디서부터 시작해야 할지
                모르겠어요. ... 체계적인 학습이 어렵고, 독학하려니 방향을 잡기가
                쉽지 않아요. ..."`}
              </span>
              <span className="text-sm">
                2자신만의 곡을 만들고 싶은, 모든 음악을 사랑하는 사람들
              </span>
              <span className="text-accent-500 text-2xl font-semibold pt-[30px]">
                접근부터 다르게, 깊이있는 화성학의 세계로
              </span>
              <span className=" whitespace-pre-line">
                {`다양한 클래식 기반 화성학 지식의 깊이있는 학습은 음악에 대한 이해를 한 수준 더 높이 끌어올려줄 수 있습니다.
                소리상상은 대한민국 최초 클래식 기반 화성학 온라인 강의를 통해, 음악에 대한 이해가 필요한 부분부터
                음악을 더 깊게 이해하고 싶으신 분들을 위한 강의를 지향합니다.`}
              </span>
            </div>

            {/* 특장점 01 */}
            {/* <div className="bg-[#051637] w-[280px] h-[580px] lg:w-[360px] lg:h-[680px] rounded-full flex flex-col text-white font-normal justify-center items-center">
              <span className="font-bold text-[50px] opacity-40 m-10">#01</span>
              <div className="font-bold text-3xl whitespace-pre-line text-center mb-11">
                {`대한민국 최초의
            온라인 클래식
             화성학 교육`}
              </div>
              <span className="text-lg w-[70px] sm:w-[250px] p-1 text-center mt-8 whitespace-pre-line">
                {`기존에는 대면 강의가 대부분이었던
            클래식 기반 화성학을 이제
            온라인에서도 배울 수 있습니다.
            시간과 장소의 제약 없이,
            여러분에게 맞춘 수업 진행으로
            더 깊이있게 이해할 수 있습니다.`}
              </span>
            </div> */}
            {/* 특장점 02 */}
            {/* <div className="bg-[#4c6189] w-[280px] h-[580px] lg:w-[360px] lg:h-[680px] rounded-full flex flex-col text-white font-normal justify-center items-center">
              <span className="font-bold text-[50px] opacity-40 m-10">#02</span>
              <div className="font-bold text-3xl whitespace-pre-line text-center mb-2">
                {`서울대 작곡과,
          서울예고 출신
          20년 경력 강사의
          고품질 강의`}
              </div>
              <span className="text-lg w-[70px] sm:w-[250px] p-1 text-center mt-8 whitespace-pre-line">
                {`20여년 동안의 강의에서 인지한
            노하우를 바탕으로 전문가의 꼼꼼한
            지도와 채점 시스템으로 입시를
            비하는 학생부터 실력을 키우고 싶은
            음악가까지 모두에게
            최적의 환경을 제공합니다.`}
              </span>
            </div>
            <div className="bg-accent-400 w-[280px] h-[580px] lg:w-[360px] lg:h-[680px] rounded-full flex flex-col text-white font-normal justify-center items-center">
              <span className="font-bold text-[50px] opacity-40 m-10">#03</span>
              <div className="font-bold text-3xl whitespace-pre-line text-center mb-11">
                {`단순 강의가 아닌,
            실전 피드백
            중심 교육`}
              </div>
              <span className="text-lg w-[70px] sm:w-[250px] p-1 text-center mt-8 whitespace-pre-line">
                {`화성학은 단순히 개념을 암기하는
            것이 아니라, 실제 문제를 풀고
            피드백을 받아야 실력이 향상됩니다.
            소리상상에서는 직접 푼
            과제를 제출하고 전문가의
            첨삭과 피드백을 받을 수 있습니다.`}
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
