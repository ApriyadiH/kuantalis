// app\backtest\page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import Menu from "../../features/backtest/components/Menu";
import Workspace from "../../features/backtest/components/Workspace";
import Chart from "../../features/backtest/components/Chart";
import Result from "../../features/backtest/components/Result";

export interface SelectedBlock {
  id: number;
  blockName: string;
  source: string;
}

export default function BacktestPage() {
  const [selectedBlock, setSelectedBlock] = useState<SelectedBlock | null>(
    null,
  );
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    if (selectedBlock) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [selectedBlock]);

  const handleCancelSelection = () => {
    if (!selectedBlock) return;

    if (selectedBlock.source === "Menu") {
      setSelectedBlock(null);
    }
  };

  return (
    <div
      className="flex h-screen w-full overflow-hidden bg-green-100"
      onClick={() => handleCancelSelection()}
    >
      <Menu
        onSelectMenu={(block, x, y) => {
          setSelectedBlock(block);
          setCursorPosition({ x, y });
        }}
      />
      <Workspace
        selectedBlock={selectedBlock}
        onSelectBlock={(block) => setSelectedBlock(block)}
        onClearSelection={() => setSelectedBlock(null)}
      />
      <div className="flex w-1/2 flex-col">
        <Chart />
        <Result />
      </div>

      {selectedBlock && (
        <div
          style={{
            left: `${cursorPosition.x + 40}px`,
            top: `${cursorPosition.y + 40}px`,
          }}
          className="pointer-events-none fixed z-50 aspect-square w-12 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-indigo-500/50 bg-white/80 p-1 shadow-2xl backdrop-blur"
        >
          <Image
            src={`/block/${selectedBlock.blockName}.png`}
            alt="Floating block"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
}
