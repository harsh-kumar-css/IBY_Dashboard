// reducer ek function hota hai jo state or action as argument leta hai
const meetingsReducer = (state = [], action) => {
  // renamed 'state' to 'state in args
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default meetingsReducer;
