import { useRecoilValue } from "recoil";
import { selectedTypeState } from "../../store/atoms";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import FilterPointsByParameters from "../../services/FilterPointsByParameters";
import FormatTableValue from "../../services/FormatTableValue";
import { TPoint } from "../../models/types";
import { MONTH_NAMES } from "../../models/constants";
import {
  StyledBoxOverflow,
  StyledBoxTable,
  StyledTableCell,
  StyledTableRow,
} from "./TableStyle";
import "./TableView.css";

const TableView: React.FC<{
  fetchedData: TPoint[];
  manualMonthEntries: TPoint[];
}> = (props) => {
  const selectedType = useRecoilValue(selectedTypeState);

  let isTemperatureSelected = selectedType.apiAbbreviation === "tas";

  const filteredManualData = FilterPointsByParameters(props.manualMonthEntries);
  const fetchedAndManualData = [...props.fetchedData, ...filteredManualData];

  if (
    props.fetchedData.length &&
    props.fetchedData[0].hasOwnProperty("monthVals")
  ) {
    return (
      <div className="table-container">
        <StyledBoxOverflow>
          <StyledBoxTable>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{ width: 130 }}>
                      GCM name
                    </StyledTableCell>
                    {MONTH_NAMES.map((month, index) => {
                      return (
                        <StyledTableCell key={index} align="center">
                          {isTemperatureSelected
                            ? `${month} [\u00B0C]`
                            : `${month} [mm]`}
                        </StyledTableCell>
                      );
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {fetchedAndManualData.map((point, index) => (
                    <StyledTableRow key={index}>
                      <TableCell>{point.gcm}</TableCell>
                      {point.monthVals!.map((value, index) => {
                        return (
                          <TableCell align="right" key={index}>
                            {FormatTableValue(value)}
                          </TableCell>
                        );
                      })}
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </StyledBoxTable>
        </StyledBoxOverflow>
      </div>
    );
  } else {
    return <></>;
  }
};

export default TableView;
