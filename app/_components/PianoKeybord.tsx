"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import * as Tone from "tone";

// 키보드 키 타입 정의
interface Key {
  note: string;
  color: "white" | "black";
  key: string;
}

// 피아노 키 배열
const keys: Key[] = [
  { note: "C4", color: "white", key: "a" },
  { note: "C#4", color: "black", key: "w" },
  { note: "D4", color: "white", key: "s" },
  { note: "D#4", color: "black", key: "e" },
  { note: "E4", color: "white", key: "d" },
  { note: "F4", color: "white", key: "f" },
  { note: "F#4", color: "black", key: "t" },
  { note: "G4", color: "white", key: "g" },
  { note: "G#4", color: "black", key: "y" },
  { note: "A4", color: "white", key: "h" },
  { note: "A#4", color: "black", key: "u" },
  { note: "B4", color: "white", key: "j" },
  { note: "C5", color: "white", key: "k" },
  { note: "C#5", color: "black", key: "o" },
  { note: "D5", color: "white", key: "l" },
  { note: "D#5", color: "black", key: "p" },
  { note: "E5", color: "white", key: ";" },
  { note: "F5", color: "white", key: "'" },
  { note: "F#5", color: "black", key: "]" },
  { note: "G5", color: "white", key: "\\" },
  { note: "G#5", color: "black", key: "z" },
  { note: "A5", color: "white", key: "x" },
  { note: "A#5", color: "black", key: "c" },
  { note: "B5", color: "white", key: "v" },
  { note: "C6", color: "white", key: "b" },
  { note: "C#6", color: "black", key: "n" },
  { note: "D6", color: "white", key: "m" },
  { note: "D#6", color: "black", key: "," },
  { note: "E6", color: "white", key: "." },
  { note: "F6", color: "white", key: "/" },
  { note: "F#6", color: "black", key: "1" },
  { note: "G6", color: "white", key: "2" },
  { note: "G#6", color: "black", key: "3" },
  { note: "A6", color: "white", key: "4" },
  { note: "A#6", color: "black", key: "5" },
  { note: "B6", color: "white", key: "6" },
  { note: "C7", color: "white", key: "7" },
];

const PianoKeyboard: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const synthRef = useRef<Tone.Synth | null>(null);

  // 클라이언트에서만 Tone.js 객체 생성
  useEffect(() => {
    synthRef.current = new Tone.Synth().toDestination();
    return () => {
      synthRef.current?.dispose(); // 언마운트 시 객체 해제
    };
  }, []);

  // 키보드 입력으로 음계 재생
  const playNote = useCallback((note: string) => {
    if (synthRef.current) {
      synthRef.current.triggerAttackRelease(note, "8n");
      setActiveKey(note);
      setTimeout(() => setActiveKey(null), 200);
    }
  }, []);

  // 키보드 입력 이벤트 등록
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const pressedKey = event.key.toLowerCase(); // ✅ 대소문자 구분 없이 처리
      const foundKey = keys.find((k) => k.key === pressedKey);
      if (foundKey) {
        playNote(foundKey.note);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [playNote]); // ✅ playNote를 의존성으로 추가하여 최신 상태 유지

  return (
    <div className="flex justify-center my-20 pb-20">
      {keys.map((key) => (
        <div
          key={key.note}
          className={`relative cursor-pointer ${
            key.color === "white"
              ? "w-16 h-40 border border-gray-300 z-10 "
              : "w-12 h-20 bg-black text-white z-20 -mx-6"
          } ${activeKey === key.note ? "bg-gray-200" : ""}`}
          onClick={() => playNote(key.note)}
        >
          {key.color === "white" && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
              {key.note.slice(0, key.note.length - 1)}
            </div>
          )}
          <div className="absolute text-xl top-20 left-[18px]">{key.key}</div>
        </div>
      ))}
    </div>
  );
};

export default PianoKeyboard;
