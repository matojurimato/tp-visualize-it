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

function App() {
  const [fetchedMonthData, setFetchedMonthData] = useState<TPointMonth[]>([]);
  const [fetchedYearData, setFetchedYearData] = useState<TPointYear[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const selectedPage = useRecoilValue(selectedPageState);
  const selectedCountry = useRecoilValue(selectedCountryState);
  const selectedPeriod = useRecoilValue(selectedPeriodState);
  const selectedType = useRecoilValue(selectedTypeState);

  const requestUrl = (iso = selectedCountry.isoCode) => {
    const baseUrl = "https://taneo-climate-api.herokuapp.com/v1/country/";
    return (
      baseUrl +
      `${selectedPage}/${selectedType}/${selectedPeriod.fromYear}/${selectedPeriod.toYear}/${iso}`
    );
  };

  const customFetch = () => {
    let requestUrlll = requestUrl();
    setIsLoading(true);
    fetch(requestUrlll)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        if (selectedPage === "mavg") {
          setFetchedMonthData(data);
        } else {
          setFetchedYearData(data);
        }
      });
  };

  useEffect(() => {
    customFetch();
  }, [selectedPage, selectedCountry, selectedPeriod, selectedType]);

  return (
    <>
      {" "}
      {isLoading && <p>LOADING...</p>}
      <Button variant="contained">+</Button>
      <ParameterController />
      <div className="content-container">
        <ViewSelector />
        {{ mavg: <TableView />, annualavg: <ChartView /> }[selectedPage]}
      </div>
    </>
  );
}

export default App;
