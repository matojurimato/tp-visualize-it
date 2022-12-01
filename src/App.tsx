import ChartView from "./components/ChartView";
import ParameterController from "./components/ParameterController";
import TableView from "./components/TableView";
import ViewSelector from "./components/ViewSelector";

function App() {
  return (
    <>
      <ParameterController />
      <ViewSelector />
      <ChartView />
      <TableView />
    </>
  );
}

export default App;
