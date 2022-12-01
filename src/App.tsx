import { Button } from "@mui/material";
import ChartView from "./components/ChartView";
import ParameterController from "./components/ParameterController/ParameterController";
import TableView from "./components/TableView";
import ViewSelector from "./components/ViewSelector/ViewSelector";
import "./App.css";

function App() {
  return (
    <>
      <Button variant="contained">+</Button>
      <ParameterController />
      <div className="content-container">
        <ViewSelector />
        <ChartView />
        <TableView />
      </div>
    </>
  );
}

export default App;
