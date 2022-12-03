import { TPoint } from "../../models/types";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Label } from "recharts";
import { useRecoilValue } from "recoil";
import { selectedTypeState } from "../../store/atoms";

const TableView: React.FC<{ data: TPoint[] }> = (props) => {
  const selectedType = useRecoilValue(selectedTypeState);

  const yAxisAndValueName =
    selectedType.apiAbbreviation === "tas"
      ? "Temperature [\u00B0C]"
      : "Precipitation [mm]";

  if (props.data.length && props.data[0].hasOwnProperty("annualData")) {
    return (
      <>
        <BarChart
          width={1000}
          height={600}
          data={props.data}
          stackOffset={"sign"}
          margin={{ top: 30, bottom: 30, left: 30, right: 30 }}
        >
          <XAxis dataKey="gcm">
            <Label
              value="gcm name"
              position="insideBottom"
              offset={-15}
              fill="#666"
            />
          </XAxis>
          <YAxis>
            <Label
              value={yAxisAndValueName}
              position="insideLeft"
              angle={-90}
              offset={10}
              dy={60}
              fill="#666"
            />
          </YAxis>
          <Tooltip></Tooltip>
          <Bar
            dataKey="annualData[0]"
            name={yAxisAndValueName}
            fill="#1976d2"
          />
        </BarChart>
      </>
    );
  } else {
    return <></>;
  }
};

export default TableView;
