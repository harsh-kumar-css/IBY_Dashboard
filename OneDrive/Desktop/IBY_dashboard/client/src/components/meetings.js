import React from "react";
import Meeting from "./meeting";
import { useSelector } from "react-redux";
import "./../styles/meetings.css";

const Meetings = () => {
  const meetings = useSelector((state) => state.meetings);
  console.log(meetings);
  return (
    <div className="sidebar">
      <div className="meetings">
        {meetings.map((meeting) => (
          // <div key={meeting._id}>
          //   <Meeting meeting={meeting} />
          // </div>
          <div>{meeting._id}</div>
        ))}
      </div>
    </div>
  );
};

export default Meetings;
