import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TableRowsRoundedIcon from "@mui/icons-material/TableRowsRounded";
import EqualizerRoundedIcon from "@mui/icons-material/EqualizerRounded";
import "./ViewSelector.css";
import { useRecoilValue } from "recoil";
import { selectedPageState } from "../../store/atoms";
import { useNavigate } from "react-router-dom";

const ViewSelector = () => {
  const selectedPage = useRecoilValue(selectedPageState);
  const navigate = useNavigate();

  const handleChangePage = (
    event: React.SyntheticEvent,
    newSelectedPage: string,
  ) => {
    navigate(newSelectedPage === "mavg" ? "/table" : "/chart");
  };

  return (
    <>
      <div className="vertical-tabs-container">
        <Tabs
          value={selectedPage}
          orientation="vertical"
          onChange={handleChangePage}
        >
          <Tab
            value="mavg"
            icon={<TableRowsRoundedIcon />}
            className="vertical-tab"
          />
          <Tab
            value="annualavg"
            icon={<EqualizerRoundedIcon />}
            className="vertical-tab"
          />
        </Tabs>
      </div>
    </>
  );
};

export default ViewSelector;
