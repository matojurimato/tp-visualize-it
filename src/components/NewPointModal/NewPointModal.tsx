import { useRecoilValue } from "recoil";
import {
  selectedCountryState,
  selectedPageState,
  selectedPeriodState,
  selectedTypeState,
} from "../../store/atoms";
import { TPoint } from "../../models/types";
import { Backdrop, Box, Modal, Fade } from "@mui/material";
import FormsMonth from "./FormsMonth";
import FormsYear from "./FormsYear";
import RoundByTwoDecimals from "../../services/RoundByTwoDecimals";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./NewPointModal.css";

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

  return (
    <div className="modal-container">
      <Modal
        open={props.modalOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
      >
        <Fade in={props.modalOpen}>
          <Box className="modal-box">
            <div className="forms-container">
              <div className="manual-values-container">
                <div className="modal-header">
                  <div className="modal-header-center">
                    <div className="close-button-area" onClick={handleClose}>
                      <CloseRoundedIcon className="close-button" />
                    </div>
                  </div>
                </div>
                {isMonthViewSelected ? (
                  <FormsMonth handleSubmitButton={handleSubmitButton} />
                ) : (
                  <FormsYear handleSubmitButton={handleSubmitButton} />
                )}
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default NewPointModal;
