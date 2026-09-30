// features\backtest\components\Workspace.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Trash2, Move } from "lucide-react";
import { SelectedBlock } from "../../../app/backtest/page";
import Gap from "./Gap";

interface WorkspaceProps {
  selectedBlock: SelectedBlock | null;
  onSelectBlock: (block: SelectedBlock) => void;
  onClearSelection: () => void;
}

interface WorkspaceBlock {
  id: number;
  blockName: string;
  params: Record<string, any>;
}

export default function Workspace({
  selectedBlock,
  onSelectBlock,
  onClearSelection,
}: WorkspaceProps) {
  const [workspaceBlocks, setWorkspaceBlocks] = useState<WorkspaceBlock[]>([]);

  function getNextId(blocks: WorkspaceBlock[]): number {
    const ids = blocks.map((block) => block.id);
    return Math.max(0, ...ids) + 1;
  }

  const handlePlaceBlock = (
    targetIndex: number,
    mode: "insert" | "replace" = "insert",
  ) => {
    if (!selectedBlock) return;

    setWorkspaceBlocks((prev) => {
      const nextId = getNextId(prev);

      const newBlock: WorkspaceBlock = {
        id: nextId,
        blockName: selectedBlock.blockName,
        params: {},
      };
      const updated = [...prev];

      const deleteCount = mode === "replace" ? 1 : 0;
      updated.splice(targetIndex, deleteCount, newBlock);
      return updated;
    });

    onClearSelection();
  };

  const handlePickUpBlock = (e: React.MouseEvent, indexToMove: number) => {
    e.stopPropagation();

    const blockToMove = workspaceBlocks[indexToMove];
    if (!blockToMove) return;

    setWorkspaceBlocks((prev) => prev.filter((_, i) => i !== indexToMove));

    onSelectBlock({
      id: blockToMove.id,
      blockName: blockToMove.blockName,
      source: String(indexToMove),
    });
  };

  const handleRemoveBlock = (idToRemove: number) => {
    setWorkspaceBlocks((prev) =>
      prev.filter((block) => block.id !== idToRemove),
    );
  };

  return (
    <main className="flex flex-1 py-2">
      <div className="h-full w-full overflow-y-scroll rounded-2xl bg-white p-2">
        <Gap
          index={0}
          isVisible={Boolean(selectedBlock)}
          onClick={() => handlePlaceBlock(0, "insert")}
        />

        {workspaceBlocks.map((block, index) => (
          <div key={block.id}>
            <div className="relative mb-2">
              <button
                type="button"
                onClick={() => handlePlaceBlock(index, "replace")}
                className="flex h-22 w-full items-center rounded-2xl border-4 border-green-100 p-2 hover:border-indigo-400 hover:bg-indigo-50/50"
              >
                <Image
                  src={`/block/${block.blockName}.png`}
                  alt={block.blockName}
                  height={64}
                  width={64}
                  preload={index === 0}
                  className="object-contain"
                />

                <p className="font-mono text-xs font-bold text-indigo-500">
                  Block Index: {index} (ID: {block.id})
                </p>
              </button>
              <div className="absolute top-2 right-2 flex flex-col gap-1">
                <button
                  type="button"
                  onClick={() => handleRemoveBlock(block.id)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-500 transition-colors hover:bg-red-100"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={(e) => handlePickUpBlock(e, index)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200"
                >
                  <Move className="h-4 w-4" />
                </button>
              </div>
            </div>

            <Gap
              isVisible={Boolean(selectedBlock)}
              index={index + 1}
              onClick={() => handlePlaceBlock(index + 1, "insert")}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
