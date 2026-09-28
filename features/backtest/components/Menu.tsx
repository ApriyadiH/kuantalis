// features\backtest\components\Menu.tsx
"use client";

import Image from "next/image";
import { SelectedBlock } from "../../../app/backtest/page";

interface MenuProps {
  onSelectMenu: (
    block: SelectedBlock,
    initialX: number,
    initialY: number,
  ) => void;
}

export default function Menu({ onSelectMenu }: MenuProps) {
  const menuItems = ["Peak", "Order", "Valley"];

  return (
    <aside className="flex w-1/8 p-2">
      <div className="h-full w-full rounded-2xl bg-white p-2">
        <h2 className="mb-4 truncate text-xl font-bold">Menu</h2>
        <div className="flex w-full flex-wrap gap-2">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={(e) => {
                e.stopPropagation();
                onSelectMenu(
                  {
                    id: "",
                    blockName: item,
                    source: "Menu",
                  },
                  e.clientX,
                  e.clientY,
                );
              }}
              className="relative aspect-square max-w-16 min-w-0 flex-1 basis-1/2 items-center justify-center rounded-2xl bg-green-100 shadow-lg transition hover:-translate-y-1 hover:shadow-xl active:translate-y-0"
            >
              <Image
                src={`/block/${item}.png`}
                alt={item}
                fill
                sizes="64px"
                className="object-contain"
              />
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
