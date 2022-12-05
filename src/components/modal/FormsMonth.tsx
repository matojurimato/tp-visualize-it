import { useState } from "react";
import "./FormsYear.css";

const FormsMonth: React.FC<{
  setMonthVals: (values: number[]) => void;
  setModalGcmName: (name: string) => void;
}> = (props) => {
  const [gcmName, setGcmName] = useState<string>("");
  const [monthValue, setMonthValue] = useState<string>("");

  const changeGcmNameHandler = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setGcmName(event.currentTarget.value);
  };

  const changeYearValueHandler = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setMonthValue(event.currentTarget.value);
  };

  // TODO - work in progress
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.setModalGcmName(gcmName);
    props.setMonthVals([
      parseFloat(monthValue),
      parseFloat(monthValue),
      parseFloat(monthValue),
      parseFloat(monthValue),
      parseFloat(monthValue),
      parseFloat(monthValue),
      parseFloat(monthValue),
      parseFloat(monthValue),
      parseFloat(monthValue),
      parseFloat(monthValue),
      parseFloat(monthValue),
      parseFloat(monthValue),
    ]);
  };

  return (
    <div className="annual-avg-container">
      <form name="year-form" onSubmit={submitHandler}>
        <label>
          GCM name
          <input
            name="gcm-name"
            type="text"
            value={gcmName}
            onChange={changeGcmNameHandler}
          ></input>
        </label>
        <input
          name="year-value"
          type="number"
          value={monthValue}
          onChange={changeYearValueHandler}
        ></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default FormsMonth;
