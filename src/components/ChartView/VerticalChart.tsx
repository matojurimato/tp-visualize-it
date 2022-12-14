import { TPoint } from "../../models/types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import "./ChartView.css";

const VerticalChart: React.FC<{
  data: TPoint[];
  yAxisAndValueName: string;
}> = (props) => {
  const YAxisLeftTick = (props: any) => {
    const { x, y, payload } = props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={3}
          textAnchor="end"
          fill="rgba(0, 0, 0, 0.87)"
          transform="rotate(-55)"
        >
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <div className="chart-container-mobile">
      <ResponsiveContainer width="100%" height={800}>
        <BarChart data={props.data} layout="vertical">
          <XAxis
            dataKey="annualData[0]"
            height={50}
            type="number"
            stroke="rgba(0, 0, 0, 0.87)"
          >
            <Label
              value={props.yAxisAndValueName}
              position="insideBottom"
              type="number"
              offset={5}
            />
          </XAxis>
          <YAxis
            dataKey="gcm"
            width={55}
            padding={{ bottom: 10 }}
            type="category"
            interval={0}
            stroke="rgba(0, 0, 0, 0.87)"
            tick={YAxisLeftTick}
          />
          <Tooltip></Tooltip>

          <Bar
            dataKey="annualData[0]"
            name={props.yAxisAndValueName}
            fill="#1976d2"
            radius={[0, 4, 4, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VerticalChart;
