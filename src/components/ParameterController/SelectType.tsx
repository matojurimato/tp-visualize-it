import { useRecoilState } from "recoil";
import { selectedTypeState } from "../../store/atoms";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { AVAILABLE_TYPES } from "../../models/constants";
import { TAvailableTypes } from "../../models/types";
import "./ParameterController.css";

const SelectType = () => {
  const [selectedType, setSelectedType] = useRecoilState(selectedTypeState);

  const handleChangeType = (event: SelectChangeEvent) => {
    const newSelectedType: TAvailableTypes = AVAILABLE_TYPES.filter((type) => {
      return type.apiAbbreviation === event.target.value;
    })[0];
    setSelectedType(newSelectedType);
  };

  return (
    <>
      <FormControl className="dropdown-select" size="small">
        <InputLabel>Type</InputLabel>
        <Select
          value={selectedType.apiAbbreviation}
          label="Type"
          onChange={handleChangeType}
        >
          {AVAILABLE_TYPES.map((type) => {
            return (
              <MenuItem value={type.apiAbbreviation} key={type.apiAbbreviation}>
                {type.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectType;
