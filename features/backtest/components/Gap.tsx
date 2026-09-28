// features\backtest\components\Gap.tsx

"use client";

interface GapProps {
  isVisible: boolean;
  onClick?: () => void;
}

export default function Gap({ isVisible, onClick }: GapProps) {
  if (!isVisible) return null;

  return (
    <div className="relative flex w-full">
      <button
        type="button"
        onClick={onClick}
        className="absolute z-10 w-full rounded-2xl p-4 hover:relative hover:mb-2 hover:h-16 hover:border-4 hover:border-dashed hover:border-indigo-400 hover:bg-indigo-50/50 hover:p-0"
      />
    </div>
  );
}
