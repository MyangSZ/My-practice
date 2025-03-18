"use client";

import { useState } from "react";
import * as Tone from "tone";

interface Key {
  note: string;
  color: "white" | "black";
}

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
];

const synth = new Tone.Synth().toDestination();

const PianoKeyboard = () => {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const playNote = (note: string) => {
    synth.triggerAttackRelease(note, "8n");
    setActiveKey(note);
    setTimeout(() => setActiveKey(null), 200);
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
