// app\backtest\page.tsx

import Menu from "../../features/backtest/components/Menu";
import Workspace from "../../features/backtest/components/Workspace";
import Chart from "../../features/backtest/components/Chart";
import Result from "../../features/backtest/components/Result";

export default function BacktestPage() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-green-100">
      <Menu />
      <Workspace />
      <div className="flex w-1/2 flex-col">
        <Chart />
        <Result />
      </div>
    </div>
  );
}
