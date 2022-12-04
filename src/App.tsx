import { Button } from "@mui/material";
import ChartView from "./components/ChartView";
import ParameterController from "./components/ParameterController/ParameterController";
import TableView from "./components/TableView";
import ViewSelector from "./components/ViewSelector/ViewSelector";
import "./App.css";
import {
  selectedPageState,
  selectedCountryState,
  selectedPeriodState,
  selectedTypeState,
} from "./store/atoms";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import useFetch from "./services/useFetch";
import { BASE_URL } from "./models/constants";

function App() {
  const [url, setUrl] = useState<string>("");

  const selectedPage = useRecoilValue(selectedPageState);
  const selectedCountry = useRecoilValue(selectedCountryState);
  const selectedPeriod = useRecoilValue(selectedPeriodState);
  const selectedType = useRecoilValue(selectedTypeState);

  const { fetchedData, loading, error } = useFetch(url, selectedPage);

  useEffect(() => {
    setUrl(
      BASE_URL +
        `${selectedPage}/${selectedType.apiAbbreviation}/${selectedPeriod.fromYear}/${selectedPeriod.toYear}/${selectedCountry.isoCode}`,
    );
  }, [selectedPage, selectedCountry, selectedPeriod, selectedType]);

  return (
    <>
      {error && <p>ERROR</p>}
      {loading && <p>LOADING...</p>}
      <Button variant="contained">+</Button>
      <ParameterController />
      <div className="content-container">
        <ViewSelector />
        {selectedPage === "mavg" ? (
          <TableView data={fetchedData} />
        ) : (
          <ChartView data={fetchedData} />
        )}
      </div>
    </>
  );
}

export default App;
