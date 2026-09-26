// features\backtest\components\Workspace.tsx

export default function Workspace() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center border-r border-slate-200 bg-slate-100 p-6">
      <div className="w-full max-w-md rounded-xl border-2 border-dashed border-slate-300 p-8 text-center text-slate-500">
        <h2 className="mb-2 text-xl font-semibold text-slate-700">Workspace</h2>
        <p className="text-sm">
          Drop your pipeline blocks here and arrange them top-to-bottom.
        </p>
      </div>
    </main>
  );
}
