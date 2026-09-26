// app\page.tsx

import Link from "next/link";

export default function Home() {
  const menuItems = ["backtest", "scraping", "predictive", "report"];

  return (
    <main className="flex min-h-screen items-center justify-center bg-green-100 p-6">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-10 shadow-xl">
        {/* Header */}
        <div className="flex h-24 flex-row items-center justify-center gap-5">
          <img src="/icon.png" alt="Kuantalis icon" className="h-15 w-15" />
          <h1 className="text-5xl font-bold">Kuantalis</h1>
        </div>

        {/* Menu */}
        <div className="grid grid-cols-2 gap-5">
          {menuItems.map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className="flex aspect-square h-[3em] w-full items-center justify-center rounded-2xl bg-green-100 text-xl font-semibold capitalize shadow-lg transition hover:-translate-y-1 hover:shadow-xl active:translate-y-0"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
