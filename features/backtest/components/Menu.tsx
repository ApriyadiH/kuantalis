// features\backtest\components\Menu.tsx

import Image from "next/image";

export default function Menu() {
  const menuItems = ["Peak", "Order"];

  return (
    <aside className="flex w-1/8 flex-col p-2">
      <div className="h-full rounded-2xl bg-white p-2">
        <h2 className="mb-4 truncate text-xl font-bold">Menu</h2>
        <div className="flex flex-wrap gap-4">
          {menuItems.map((item) => (
            <button
              key={item}
              className="relative flex aspect-square w-15 items-center justify-center rounded-2xl bg-green-100 shadow-lg transition hover:-translate-y-1 hover:shadow-xl active:translate-y-0"
            >
              <Image
                src={`/block/${item}.png`}
                alt={item}
                fill
                className="object-contain"
              />
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
