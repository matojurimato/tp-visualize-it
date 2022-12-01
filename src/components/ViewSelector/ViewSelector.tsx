import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TableRowsRoundedIcon from "@mui/icons-material/TableRowsRounded";
import EqualizerRoundedIcon from "@mui/icons-material/EqualizerRounded";
import "./ViewSelector.css";

const ViewSelector = () => {
  return (
    <>
      <div className="vertical-tabs-container">
        <Tabs value={"tabular"} orientation="vertical">
          <Tab
            value="tabular"
            icon={<TableRowsRoundedIcon />}
            className="vertical-tab"
          />
          <Tab
            value="visual"
            icon={<EqualizerRoundedIcon />}
            className="vertical-tab"
          />
        </Tabs>
      </div>
    </>
  );
};

export default ViewSelector;
