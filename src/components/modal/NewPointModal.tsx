import { useState } from "react";
import { Backdrop, Box, Modal, Fade, Button } from "@mui/material";
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
  const [modalGcmName, setModalGcmName] = useState("");
  const [monthVals, setMonthVals] = useState<number[]>([]);
  const [yearVal, setYearVal] = useState<number[]>([]);

  const handleClose = () => props.setModalOpen(false);

  let isMonthViewSelected = selectedPage === "mavg";

  const handleSubmitButton = () => {
    if (isMonthViewSelected) {
      let result: TPoint = {
        gcm: modalGcmName,
        fromYear: selectedPeriod.fromYear,
        toYear: selectedPeriod.toYear,
        variable: selectedType.apiAbbreviation,
        countryIso: selectedCountry.isoCode,
        monthVals: monthVals,
      };
      props.setManualMonthEntries([...props.manualMonthEntries, result]);
    } else {
      let result: TPoint = {
        gcm: modalGcmName,
        fromYear: selectedPeriod.fromYear,
        toYear: selectedPeriod.toYear,
        variable: selectedType.apiAbbreviation,
        countryIso: selectedCountry.isoCode,
        annualData: yearVal,
      };
      props.setManualYearEntries([...props.manualYearEntries, result]);
    }
    handleClose();
    setModalGcmName("");
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
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
        }}
      >
        <Fade in={props.modalOpen}>
          <Box sx={boxStyle}>
            <div className="container">
              {isMonthViewSelected ? (
                <FormsMonth
                  setModalGcmName={setModalGcmName}
                  setMonthVals={setMonthVals}
                />
              ) : (
                <FormsYear
                  setModalGcmName={setModalGcmName}
                  setYearVal={setYearVal}
                />
              )}
              <div className="button-container">
                <div className="submit-button">
                  <Button onClick={handleSubmitButton} variant="contained">
                    + Add
                  </Button>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default NewPointModal;
