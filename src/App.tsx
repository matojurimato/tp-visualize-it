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
import { TPointMonth, TPointYear } from "./models/types";
import { useEffect, useState } from "react";
import useFetch from "./services/useFetch";
import { BASE_URL } from "./models/constants";

function App() {
  const [fetchedMonthData, setFetchedMonthData] = useState<TPointMonth[]>([]);
  const [fetchedYearData, setFetchedYearData] = useState<TPointYear[]>([]);
  const [url, setUrl] = useState<string>(
    "https://taneo-climate-api.herokuapp.com/v1/country/mavg/tas/2020/2039/HRV",
  );

  const { data, loading, error } = useFetch(url);

  const selectedPage = useRecoilValue(selectedPageState);
  const selectedCountry = useRecoilValue(selectedCountryState);
  const selectedPeriod = useRecoilValue(selectedPeriodState);
  const selectedType = useRecoilValue(selectedTypeState);

  useEffect(() => {
    setUrl(
      BASE_URL +
        `${selectedPage}/${selectedType}/${selectedPeriod.fromYear}/
        ${selectedPeriod.toYear}/${selectedCountry.isoCode}`,
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
        {selectedPage === "mavg" ? <TableView /> : <ChartView />}
      </div>
    </>
  );
}

export default App;
