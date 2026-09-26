// app\page.tsx

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const homeItems = ["backtest", "scrape", "predictive", "report"];

  return (
    <main className="flex min-h-screen items-center justify-center bg-green-100 p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-4 shadow-xl">
        {/* Header */}
        <div className="flex flex-row items-center justify-center gap-5 p-4">
          <Image src="/icon.png" alt="Kuantalis icon" width={60} height={60} />
          <h1 className="text-5xl font-bold">Kuantalis</h1>
        </div>

        {/* Menu */}
        <div className="grid grid-cols-2 gap-4">
          {homeItems.map((item) => (
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
