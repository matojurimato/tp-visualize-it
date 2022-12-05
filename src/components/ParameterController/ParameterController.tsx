import Card from "@mui/material/Card";
import "./ParameterController.css";
import SelectCountry from "./SelectCountry";
import SelectPeriod from "./SelectPeriod";
import SelectType from "./SelectType";

const ParameterController = () => {
  return (
    <>
      <Card className="select-container">
        <SelectCountry />
        <SelectPeriod />
        <SelectType />
      </Card>
    </>
  );
};

export default ParameterController;
