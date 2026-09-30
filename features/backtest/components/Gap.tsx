// features\backtest\components\Gap.tsx

"use client";

interface GapProps {
  isVisible: boolean;
  onClick?: () => void;
  index?: number;
}

export default function Gap({ isVisible, onClick, index }: GapProps) {
  if (!isVisible) return null;

  return (
    <div className="relative flex w-full">
      <button
        type="button"
        onClick={onClick}
        className="absolute z-10 w-full rounded-2xl hover:relative hover:mb-2 hover:h-16 hover:border-4 hover:border-dashed hover:border-indigo-400 hover:bg-indigo-50/50 hover:p-0"
      >
        {index !== undefined && (
          <span className="font-mono text-xs text-gray-400 group-hover:text-indigo-600">
            Gap Index: {index}
          </span>
        )}
      </button>
    </div>
  );
}
