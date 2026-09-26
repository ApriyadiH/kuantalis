// features\backtest\components\Chart.tsx

export default function Chart() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center border-b border-indigo-100 bg-indigo-50 p-6">
      <h2 className="mb-1 text-lg font-bold text-indigo-900">Chart</h2>
      <p className="text-sm text-indigo-600">
        Real-time pipeline graph preview
      </p>
    </section>
  );
}
