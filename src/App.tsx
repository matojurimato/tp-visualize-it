import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import {
  selectedPageState,
  selectedCountryState,
  selectedPeriodState,
  selectedTypeState,
} from "./store/atoms";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import ParameterController from "./components/ParameterController/ParameterController";
import ViewSelector from "./components/ViewSelector/ViewSelector";
import ChartView from "./components/ChartView/ChartView";
import TableView from "./components/TableView/TableView";
import NewPointModal from "./components/NewPointModal/NewPointModal";
import useFetch from "./services/useFetch";
import { BASE_URL } from "./models/constants";
import { TPoint } from "./models/types";
import "./App.css";

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
            <div className="data-container">
              <Card className="data-card">
                {loading && (
                  <div className="loading-overlay">
                    <div className="loading-spinner">
                      <CircularProgress />
                    </div>
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
            <div className="right-margin" />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
