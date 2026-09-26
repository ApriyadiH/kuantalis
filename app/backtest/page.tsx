// app\backtest\page.tsx
"use client";

import { useState, useEffect, act } from "react";
import Image from "next/image";

import Menu from "../../features/backtest/components/Menu";
import Workspace from "../../features/backtest/components/Workspace";
import Chart from "../../features/backtest/components/Chart";
import Result from "../../features/backtest/components/Result";

export default function BacktestPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    if (activeImage) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [activeImage]);

  const handleSelectBlock = (
    imagePath: string,
    initialX: number,
    initialY: number,
  ) => {
    setActiveImage(imagePath);
    setCursorPosition({ x: initialX, y: initialY });
  };

  return (
    <div
      className="flex h-screen w-full overflow-hidden bg-green-100"
      onClick={() => setActiveImage(null)}
    >
      <Menu onSelectBlock={handleSelectBlock} />
      <Workspace />
      <div className="flex w-1/2 flex-col">
        <Chart />
        <Result />
      </div>

      {activeImage && (
        <div
          style={{
            left: `${cursorPosition.x + 40}px`,
            top: `${cursorPosition.y + 40}px`,
          }}
          className="pointer-events-none fixed z-50 aspect-square w-12 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-indigo-500/50 bg-white/80 p-1 shadow-2xl backdrop-blur"
        >
          <div className="relative h-full w-full">
            <Image
              src={activeImage}
              alt="Floating block"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
