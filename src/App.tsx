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
import NewPointModal from "./components/modal/NewPointModal";
import { TPoint } from "./models/types";

const App = () => {
  const [url, setUrl] = useState<string>("");
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);

  const selectedPage = useRecoilValue(selectedPageState);
  const selectedCountry = useRecoilValue(selectedCountryState);
  const selectedPeriod = useRecoilValue(selectedPeriodState);
  const selectedType = useRecoilValue(selectedTypeState);

  const { fetchedData, loading } = useFetch(url, selectedPage);
  const [manualMonthEntries, setManualMonthEntries] = useState<TPoint[]>([]);
  const [manualYearEntries, setManualYearEntries] = useState<TPoint[]>([]);

  useEffect(() => {
    setUrl(
      BASE_URL +
        `${selectedPage}/${selectedType.apiAbbreviation}/${selectedPeriod.fromYear}/${selectedPeriod.toYear}/${selectedCountry.isoCode}`,
    );
  }, [selectedPage, selectedCountry, selectedPeriod, selectedType]);

  return (
    <>
      <NewPointModal
        manualMonthEntries={manualMonthEntries}
        setManualMonthEntries={setManualMonthEntries}
        manualYearEntries={manualYearEntries}
        setManualYearEntries={setManualYearEntries}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
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
              <Button variant="contained" onClick={handleOpen}>
                Add new point
              </Button>
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
                  <TableView
                    fetchedData={fetchedData}
                    manualMonthEntries={manualMonthEntries}
                  />
                ) : (
                  <ChartView
                    fetchedData={fetchedData}
                    manualYearEntries={manualYearEntries}
                  />
                )}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
