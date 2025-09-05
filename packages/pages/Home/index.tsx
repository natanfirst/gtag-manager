"use client";

import { sendGTMEvent } from "@next/third-parties/google";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <button
        className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
        onClick={() => {
          sendGTMEvent({ event: "buttonClicked", value: "fired" });
        }}
      >
        Test Button
      </button>
    </div>
  );
}
