import Card from "@mui/material/Card";
import SelectCountry from "./SelectCountry";
import SelectPeriod from "./SelectPeriod";
import SelectType from "./SelectType";

const ParameterController = () => {
  return (
    <>
      <Card className="parameters-card">
        <SelectCountry />
        <SelectPeriod />
        <SelectType />
      </Card>
    </>
  );
};

export default ParameterController;
