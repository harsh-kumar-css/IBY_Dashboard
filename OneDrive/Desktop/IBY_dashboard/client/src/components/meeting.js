import React from "react";

const Meeting = ({ meeting }) => {
  //   console.log(meeting);
  return (
    <div>
      {meeting.userDetails.map((user) => (
        <h5>{user.userId}</h5>
      ))}
    </div>
  );
};

export default Meeting;
