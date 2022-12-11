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
import FilterPointsByParameters from "../../services/FilterPointsByParameters";
import "./ChartView.css";

const ChartView: React.FC<{
  fetchedData: TPoint[];
  manualYearEntries: TPoint[];
}> = (props) => {
  const selectedType = useRecoilValue(selectedTypeState);

  const filteredYearData = FilterPointsByParameters(props.manualYearEntries);
  const fetchedAndManualData = [...props.fetchedData, ...filteredYearData];

  const yAxisAndValueName =
    selectedType.apiAbbreviation === "tas"
      ? "Temperature [\u00B0C]"
      : "Precipitation [mm]";

  if (
    fetchedAndManualData.length &&
    fetchedAndManualData[0].hasOwnProperty("annualData")
  ) {
    return (
      <div className="chart-container">
        <ResponsiveContainer width="90%" height={545}>
          <BarChart data={fetchedAndManualData} stackOffset={"sign"}>
            <XAxis
              dataKey="gcm"
              stroke="rgba(0, 0, 0, 0.87)"
              interval={0}
              angle={40}
              dy={30}
              dx={30}
              padding={{ right: 30 }}
              height={110}
            >
              <Label value="GCM name" position="insideBottom" />
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

export default ChartView;
