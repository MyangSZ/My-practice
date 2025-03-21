"use client";

import { useState, useEffect } from "react";
import * as Tone from "tone";

// 키보드 키 타입 정의
interface Key {
  note: string;
  color: "white" | "black";
}

// 피아노 키 배열
const keys: Key[] = [
  { note: "C4", color: "white" },
  { note: "C#4", color: "black" },
  { note: "D4", color: "white" },
  { note: "D#4", color: "black" },
  { note: "E4", color: "white" },
  { note: "F4", color: "white" },
  { note: "F#4", color: "black" },
  { note: "G4", color: "white" },
  { note: "G#4", color: "black" },
  { note: "A4", color: "white" },
  { note: "A#4", color: "black" },
  { note: "B4", color: "white" },
  { note: "C5", color: "white" },
  { note: "C#5", color: "black" },
  { note: "D5", color: "white" },
  { note: "D#5", color: "black" },
  { note: "E5", color: "white" },
  { note: "F5", color: "white" },
  { note: "F#5", color: "black" },
  { note: "G5", color: "white" },
  { note: "G#5", color: "black" },
  { note: "A5", color: "white" },
  { note: "A#5", color: "black" },
  { note: "B5", color: "white" },
  { note: "C6", color: "white" },
  { note: "C#6", color: "black" },
  { note: "D6", color: "white" },
  { note: "D#6", color: "black" },
  { note: "E6", color: "white" },
  { note: "F6", color: "white" },
  { note: "F#6", color: "black" },
  { note: "G6", color: "white" },
  { note: "G#6", color: "black" },
  { note: "A6", color: "white" },
  { note: "A#6", color: "black" },
  { note: "B6", color: "white" },
  { note: "C7", color: "white" },
];

const PianoKeyboard: React.FC = () => {
  const [synth, setSynth] = useState<Tone.Synth | null>(null);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  // 클라이언트에서만 Tone.js 객체 생성
  useEffect(() => {
    const newSynth = new Tone.Synth().toDestination();
    setSynth(newSynth);

    return () => {
      newSynth.dispose(); // 언마운트 시 객체 해제
    };
  }, []);

  const playNote = (note: string) => {
    if (synth) {
      synth.triggerAttackRelease(note, "8n");
      setActiveKey(note);
      setTimeout(() => setActiveKey(null), 200);
    }
  };

  return (
    <div className="flex justify-center my-20 pb-20">
      {keys.map((key) => (
        <div
          key={key.note}
          className={`relative cursor-pointer ${
            key.color === "white"
              ? "w-16 h-40 bg-white border border-gray-300 z-10"
              : "w-12 h-20 bg-black text-white z-20 -mx-6"
          } ${activeKey === key.note ? "bg-gray-200" : ""}`}
          onClick={() => playNote(key.note)}
        >
          {key.color === "white" && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
              {key.note.slice(0, key.note.length - 1)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PianoKeyboard;
