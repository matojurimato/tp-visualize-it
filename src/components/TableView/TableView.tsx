import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { MONTH_NAMES } from "../../models/constants";
import { TPoint } from "../../models/types";
import {
  StyledBoxOverflow,
  StyledBoxTable,
  StyledTableCell,
  StyledTableRow,
} from "./TableStyle";
import "./TableView.css";

const TableView: React.FC<{ data: TPoint[] }> = (props) => {
  var sequenceOneToTwelve = Array.from(Array(12).keys());

  if (props.data.length && props.data[0].hasOwnProperty("monthVals")) {
    return (
      <div className="table-container">
        <StyledBoxOverflow>
          <StyledBoxTable>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>GCM name</StyledTableCell>
                    {MONTH_NAMES.map((month, index) => {
                      return (
                        <StyledTableCell key={index}>{month}</StyledTableCell>
                      );
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.data.map((point, index) => (
                    <StyledTableRow key={index}>
                      <TableCell>{point.gcm}</TableCell>
                      {sequenceOneToTwelve.map((iterator) => {
                        return (
                          <TableCell key={iterator}>
                            {point.monthVals && point.monthVals[iterator]}
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
