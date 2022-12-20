/**
 * This function receives an array of numbers and returns an array whose
 * numbers are all fixed to 2 decimal places.
 */

const RoundByTwoDecimals = (values: number[]) => {
  if (values.length) {
    const roundedValues = values.map((value) => {
      return Math.round(value * 100) / 100;
    });
    return roundedValues;
  }

  return [];
};

export default RoundByTwoDecimals;
