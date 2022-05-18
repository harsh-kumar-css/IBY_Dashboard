import mongoose from "mongoose";

const meetingSchema = mongoose.Schema({
  userDetails: {
    type: Array,
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Meeting = mongoose.model("Meeting", meetingSchema);

export default Meeting;
