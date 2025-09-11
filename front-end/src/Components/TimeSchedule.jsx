import React, { useContext } from "react";
import { slotsList } from "../data";
import RadioComponent from "./RadioComponent";
import "../Css/TimeSchedule.css";
import BsContext from "../Context/BsContext";

const TimeSchedule = () => {
  const context = useContext(BsContext);

  const { time, changeTime } = context;

  const handleChangeItem = (val) => {
    changeTime(val)

    window.localStorage.setItem("slot", val)
  }
  return (
    <>
      <div className="slot_container">
        <h1 className="TS_heading">Select a Schedule</h1>
        <div className="TS_main_container">
          {slotsList.map((el, index) => {
            return (
              <RadioComponent
                text={el}
                key={index}
                data={time}
                changeSelection={handleChangeItem}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TimeSchedule;
