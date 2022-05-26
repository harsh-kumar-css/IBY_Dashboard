import React, { useEffect } from "react";
import { getMeetings } from "./actions/meetings.js";
import { useDispatch } from "react-redux"; // ussed to dispatch an action
import Meetings from "./components/meetings";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeetings());
  }, [dispatch]);

  return (
    <div>
      <Meetings />
    </div>
  );
};

export default App;
