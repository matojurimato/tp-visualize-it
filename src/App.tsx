import { Button } from "@mui/material";
import ChartView from "./components/ChartView/ChartView";
import ParameterController from "./components/ParameterController/ParameterController";
import TableView from "./components/TableView/TableView";
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
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";

function App() {
  const [url, setUrl] = useState<string>("");

  const selectedPage = useRecoilValue(selectedPageState);
  const selectedCountry = useRecoilValue(selectedCountryState);
  const selectedPeriod = useRecoilValue(selectedPeriodState);
  const selectedType = useRecoilValue(selectedTypeState);

  const { fetchedData, loading } = useFetch(url, selectedPage);

  useEffect(() => {
    setUrl(
      BASE_URL +
        `${selectedPage}/${selectedType.apiAbbreviation}/${selectedPeriod.fromYear}/${selectedPeriod.toYear}/${selectedCountry.isoCode}`,
    );
  }, [selectedPage, selectedCountry, selectedPeriod, selectedType]);

  return (
    <div className="main">
      <div className="header">
        <div className="header-logo-container">
          <p className="logo">visualize-it</p>
        </div>
      </div>
      <div className="main-content">
        <div className="controls-container">
          <div className="parameter-controllers">
            <ParameterController />
          </div>
          <div className="new-point-button">
            <Button variant="contained">Add new point</Button>
          </div>
        </div>
        <div className="content-container">
          <ViewSelector />
          <div className="data-card">
            <Card>
              {loading && (
                <div className="loading">
                  <CircularProgress />
                </div>
              )}
              {selectedPage === "mavg" ? (
                <TableView data={fetchedData} />
              ) : (
                <ChartView data={fetchedData} />
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
