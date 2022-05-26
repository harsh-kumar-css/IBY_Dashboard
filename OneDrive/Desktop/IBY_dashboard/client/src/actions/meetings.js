import * as api from "../api";

export const getMeetings = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMeetings();
    // console.log(data);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// export const addUser = (post) => async (dispatch) => {
//   try {
//     const { data } = await api.createPost(post);

//     dispatch({ type: "CREATE", payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const addUser = (post) => async (dispatch) => {
//   try {
//     const { data } = await api.createPost(post);

//     dispatch({ type: "CREATE", payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const addUser = (post) => async (dispatch) => {
//   try {
//     const { data } = await api.createPost(post);

//     dispatch({ type: "CREATE", payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
