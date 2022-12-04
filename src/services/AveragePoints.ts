import { TPoint } from "../models/types";

const averageValuesInArray = (values: number[]) => {
  if (values.length) {
    let sum = values.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
    let average = sum / values.length;
    let roundedAverage = Math.round(average * 100) / 100;
    return roundedAverage;
  } else {
    return 0;
  }
};

const AveragePoints = (points: TPoint[][], selectedPage: string) => {
  let isMonthViewSelected = selectedPage === "mavg";
  var resultPoint: TPoint[] = [];

  for (let gcm = 0; gcm < 10; gcm++) {
    let gcmValues: number[] = [];
    var gcmResult: TPoint;
    let numberOfDataArrayElements = isMonthViewSelected ? 12 : 1;
    for (
      let dataArray = 0;
      dataArray < numberOfDataArrayElements;
      dataArray++
    ) {
      let monthOrYearValues: number[] = [];
      for (let country = 0; country < points.length; country++) {
        switch (isMonthViewSelected) {
          case true:
            monthOrYearValues.push(points[country][gcm].monthVals![dataArray]);
            break;
          default:
            monthOrYearValues.push(points[country][gcm].annualData![dataArray]);
        }
      }

      gcmValues.push(averageValuesInArray(monthOrYearValues));
    }

    switch (isMonthViewSelected) {
      case true:
        gcmResult = {
          gcm: points[0][gcm].gcm,
          fromYear: points[0][gcm].fromYear,
          toYear: points[0][gcm].toYear,
          variable: points[0][gcm].variable,
          monthVals: gcmValues,
        };
        break;
      default:
        gcmResult = {
          gcm: points[0][gcm].gcm,
          fromYear: points[0][gcm].fromYear,
          toYear: points[0][gcm].toYear,
          variable: points[0][gcm].variable,
          annualData: gcmValues,
        };
    }
    resultPoint.push(gcmResult);
  }

  return resultPoint;
};

export default AveragePoints;
