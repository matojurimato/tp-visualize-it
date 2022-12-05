import { TPoint } from "../../models/types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  ResponsiveContainer,
} from "recharts";
import { useRecoilValue } from "recoil";
import { selectedTypeState } from "../../store/atoms";
import "./ChartView.css";

const TableView: React.FC<{ data: TPoint[] }> = (props) => {
  const selectedType = useRecoilValue(selectedTypeState);

  const yAxisAndValueName =
    selectedType.apiAbbreviation === "tas"
      ? "Temperature [\u00B0C]"
      : "Precipitation [mm]";

  if (props.data.length && props.data[0].hasOwnProperty("annualData")) {
    return (
      <div className="chart-container">
        <ResponsiveContainer width="90%" height={585}>
          <BarChart
            data={props.data}
            stackOffset={"sign"}
            margin={{ top: 50, bottom: 110, left: 60 }}
          >
            <XAxis
              dataKey="gcm"
              stroke="rgba(0, 0, 0, 0.87)"
              interval={0}
              angle={40}
              dy={30}
              dx={30}
              padding={{ right: 30 }}
            >
              <Label value="GCM name" position="insideBottom" offset={-80} />
            </XAxis>
            <YAxis stroke="rgba(0, 0, 0, 0.87)">
              <Label
                value={yAxisAndValueName}
                position="insideLeft"
                angle={-90}
                offset={10}
                dy={60}
              />
            </YAxis>
            <Tooltip></Tooltip>
            <Bar
              dataKey="annualData[0]"
              name={yAxisAndValueName}
              fill="#1976d2"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  } else {
    return <></>;
  }
};

export default TableView;
