import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { MONTH_NAMES } from "../../models/constants";
import { TPointMonth } from "../../models/types";

const TableView: React.FC<{ data: TPointMonth[] }> = (props) => {
  var sequenceOneToTwelve = Array.from(Array(12).keys());

  if (props.data.length && props.data[0].hasOwnProperty("monthVals")) {
    return (
      <TableContainer sx={{ width: 1000 }} component={Card}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>gcm</TableCell>
              {MONTH_NAMES.map((month, index) => {
                return <TableCell key={index}>{month}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((point, index) => (
              <TableRow key={index}>
                <TableCell>{point.gcm}</TableCell>
                {sequenceOneToTwelve.map((iterator) => {
                  return (
                    <TableCell key={iterator}>
                      {point.monthVals[iterator]}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else {
    return <></>;
  }
};

export default TableView;
