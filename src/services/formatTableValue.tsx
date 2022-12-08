/**
 * This function recieves a number and returns a \<div\> with _padding-right_
 * such that all returned numbers are vertically aligned using their decimal
 * places
 */

const formatTableValue = (number: number) => {
  let offsetSpaces = 0;
  const maxDecimalSpaces = 2;
  const characterWidthInPx = 8;
  const numberAsString = number.toString();

  if (numberAsString.indexOf(".") === -1) {
    return (
      <div style={{ paddingRight: 2.5 * characterWidthInPx }}>{number}</div>
    );
  } else {
    offsetSpaces = number.toString().split(".")[1].length;
    return (
      <div
        style={{
          paddingRight: (maxDecimalSpaces - offsetSpaces) * characterWidthInPx,
        }}
      >
        {number}
      </div>
    );
  }
};

export default formatTableValue;
