import { useMediaQuery } from "react-responsive";
import { useRecoilValue } from "recoil";
import { selectedTypeState } from "../../store/atoms";
import { TPoint } from "../../models/types";
import FilterPointsByParameters from "../../services/FilterPointsByParameters";
import VerticalChart from "./VerticalChart";
import HorizontalChart from "./HorizontalChart";
import "./ChartView.css";

const ChartView: React.FC<{
  fetchedData: TPoint[];
  manualYearEntries: TPoint[];
}> = (props) => {
  const selectedType = useRecoilValue(selectedTypeState);

  const filteredYearData = FilterPointsByParameters(props.manualYearEntries);
  const fetchedAndManualData = [...props.fetchedData, ...filteredYearData];

  const isBigScreen = useMediaQuery({ query: "(min-width: 880px)" });

  const yAxisAndValueName =
    selectedType.apiAbbreviation === "tas"
      ? "Temperature [\u00B0C]"
      : "Precipitation [mm]";

  if (
    !fetchedAndManualData.length ||
    !fetchedAndManualData[0].hasOwnProperty("annualData")
  ) {
    return <></>;
  } else if (isBigScreen) {
    return (
      <HorizontalChart
        data={fetchedAndManualData}
        yAxisAndValueName={yAxisAndValueName}
      />
    );
  } else {
    return (
      <VerticalChart
        data={fetchedAndManualData}
        yAxisAndValueName={yAxisAndValueName}
      />
    );
  }
};

export default ChartView;
