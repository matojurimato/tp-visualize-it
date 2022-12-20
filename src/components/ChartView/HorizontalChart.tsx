import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  ResponsiveContainer,
} from "recharts";
import { TPoint } from "../../models/types";
import "./ChartView.css";

const HorizontalChart: React.FC<{
  data: TPoint[];
  yAxisAndValueName: string;
}> = (props) => {
  const XAxisBottomTick = (props: any) => {
    const { x, y, payload } = props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="rgba(0, 0, 0, 0.87)"
          transform="rotate(-25)"
        >
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={550}>
        <BarChart data={props.data} stackOffset={"sign"}>
          <XAxis
            dataKey="gcm"
            stroke="rgba(0, 0, 0, 0.87)"
            height={90}
            interval={0}
            tick={XAxisBottomTick}
          >
            <Label value="GCM name" position="insideBottom" dy={8} />
          </XAxis>
          <YAxis stroke="rgba(0, 0, 0, 0.87)">
            <Label
              value={props.yAxisAndValueName}
              position="insideLeft"
              angle={-90}
              offset={4}
              dy={60}
            />
          </YAxis>
          <Tooltip></Tooltip>
          <Bar
            dataKey="annualData[0]"
            name={props.yAxisAndValueName}
            fill="#1976d2"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HorizontalChart;
