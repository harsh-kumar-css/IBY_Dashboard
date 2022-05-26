import axios from "axios";

const url = "http://localhost:5000/api/v1/getMeetings";

export const fetchMeetings = () => axios.get(url);
// export const createMeeting = (newPost) => axios.post(url + "createMeeting");
