import { useRecoilState } from "recoil";
import { selectedPeriodState } from "../../store/atoms";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { AVAILABLE_PERIODS } from "../../models/constants";
import { TAvailablePeriods } from "../../models/types";
import "./ParameterController.css";

const SelectPeriod = () => {
  const [selectedPeriod, setSelectedPeriod] =
    useRecoilState(selectedPeriodState);

  const handleChangePeriod = (event: SelectChangeEvent) => {
    const newSelectedPeriod: TAvailablePeriods = AVAILABLE_PERIODS.filter(
      (period) => {
        return period.fromYear.toString() === event.target.value;
      },
    )[0];
    setSelectedPeriod(newSelectedPeriod);
  };

  return (
    <>
      <FormControl className="dropdown-select" size="small">
        <InputLabel>Period</InputLabel>
        <Select
          value={selectedPeriod.fromYear.toString()}
          label="Period"
          onChange={handleChangePeriod}
        >
          {AVAILABLE_PERIODS.map((period) => {
            return (
              <MenuItem
                value={period.fromYear.toString()}
                key={period.fromYear}
              >{`${period.fromYear}-${period.toYear}`}</MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectPeriod;
