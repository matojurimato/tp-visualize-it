import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <RecoilRoot>
    <Router>
      <Routes>
        <Route path="/" element={<App routerPath="table" />} />
        <Route path="/table" element={<App routerPath="table" />} />
        <Route path="/chart" element={<App routerPath="chart" />} />
      </Routes>
    </Router>
  </RecoilRoot>,
);
