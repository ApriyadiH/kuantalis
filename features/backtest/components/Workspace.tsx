// features\backtest\components\Workspace.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { SelectedBlock } from "../../../app/backtest/page";
import Gap from "./Gap";

interface WorkspaceProps {
  selectedBlock: SelectedBlock | null;
  onClearSelection: () => void;
}

interface WorkspaceBlock {
  id: number;
  blockName: string;
  params: Record<string, any>;
}

export default function Workspace({
  selectedBlock,
  onClearSelection,
}: WorkspaceProps) {
  const [workspaceBlocks, setWorkspaceBlocks] = useState<WorkspaceBlock[]>([]);

  function getNextId(blocks: WorkspaceBlock[]): number {
    const ids = blocks.map((block) => block.id);
    return Math.max(0, ...ids) + 1;
  }

  const handlePlaceBlock = (targetIndex: number) => {
    if (!selectedBlock) return;

    setWorkspaceBlocks((prev) => {
      const nextId = getNextId(prev);

      const newBlock: WorkspaceBlock = {
        id: nextId,
        blockName: selectedBlock.blockName,
        params: {},
      };

      const updated = [...prev];
      updated.splice(targetIndex, 0, newBlock);
      return updated;
    });

    onClearSelection();
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
          isVisible={Boolean(selectedBlock)}
          onClick={() => handlePlaceBlock(0)}
        />

        {workspaceBlocks.map((block, index) => (
          <div key={block.id}>
            <div className="relative mb-2">
              <button
                type="button"
                className="flex h-22 w-full items-center rounded-2xl border-4 border-green-100 p-2"
              >
                <Image
                  src={`/block/${block.blockName}.png`}
                  alt={block.blockName}
                  height={64}
                  width={64}
                  preload={index === 0}
                  className="object-contain"
                />
              </button>
              <button
                type="button"
                onClick={() => handleRemoveBlock(block.id)}
                className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-500 transition-colors hover:bg-red-100"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>

            <Gap
              isVisible={Boolean(selectedBlock)}
              onClick={() => handlePlaceBlock(index + 1)}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
