import { useState } from "react";
import "./FormsYear.css";

const FormsYear: React.FC<{
  setYearVal: (values: number[]) => void;
  setModalGcmName: (name: string) => void;
}> = (props) => {
  const [gcmName, setGcmName] = useState<string>("");
  const [yearValue, setYearValue] = useState<string>("");

  const changeGcmNameHandler = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setGcmName(event.currentTarget.value);
  };

  const changeYearValueHandler = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setYearValue(event.currentTarget.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.setModalGcmName(gcmName);
    props.setYearVal([parseFloat(yearValue)]);
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
          value={yearValue}
          onChange={changeYearValueHandler}
        ></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default FormsYear;
