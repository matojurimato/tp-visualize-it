import { Backdrop, Box, Modal, Fade } from "@mui/material";
import FormsMonth from "./FormsMonth";
import FormsYear from "./FormsYear";
import { useRecoilValue } from "recoil";
import "./NewPointModal.css";
import { TPoint } from "../../models/types";
import {
  selectedCountryState,
  selectedPageState,
  selectedPeriodState,
  selectedTypeState,
} from "../../store/atoms";
import RoundByTwoDecimals from "../../services/RoundByTwoDecimals";

const NewPointModal: React.FC<{
  manualMonthEntries: TPoint[];
  setManualMonthEntries: (points: TPoint[]) => void;
  manualYearEntries: TPoint[];
  setManualYearEntries: (points: TPoint[]) => void;
  modalOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
}> = (props) => {
  const selectedPage = useRecoilValue(selectedPageState);
  const selectedCountry = useRecoilValue(selectedCountryState);
  const selectedPeriod = useRecoilValue(selectedPeriodState);
  const selectedType = useRecoilValue(selectedTypeState);

  const handleClose = () => props.setModalOpen(false);

  let isMonthViewSelected = selectedPage === "mavg";

  const handleSubmitButton = (gcmName: string, manualValues: number[]) => {
    const manualRoundedValues = RoundByTwoDecimals(manualValues);
    if (isMonthViewSelected) {
      let result: TPoint = {
        gcm: gcmName,
        fromYear: selectedPeriod.fromYear,
        toYear: selectedPeriod.toYear,
        variable: selectedType.apiAbbreviation,
        countryIso: selectedCountry.isoCode,
        monthVals: manualRoundedValues,
      };
      props.setManualMonthEntries([...props.manualMonthEntries, result]);
    } else {
      let result: TPoint = {
        gcm: gcmName,
        fromYear: selectedPeriod.fromYear,
        toYear: selectedPeriod.toYear,
        variable: selectedType.apiAbbreviation,
        countryIso: selectedCountry.isoCode,
        annualData: manualRoundedValues,
      };
      props.setManualYearEntries([...props.manualYearEntries, result]);
    }
    handleClose();
  };

  const boxStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    minWidth: 800,
    bgcolor: "background.paper",
    border: "2px solid #0000008b",
    borderRadius: 3,
    boxShadow: 15,
    p: 5,
  };

  return (
    <div>
      <Modal
        open={props.modalOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
      >
        <Fade in={props.modalOpen}>
          <Box sx={boxStyle}>
            <div className="container">
              {isMonthViewSelected ? (
                <FormsMonth handleSubmitButton={handleSubmitButton} />
              ) : (
                <FormsYear handleSubmitButton={handleSubmitButton} />
              )}
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default NewPointModal;
