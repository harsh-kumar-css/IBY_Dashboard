import Meeting from "../models/meetings.js";
import mongoose from "mongoose";

export const createMeeting = async (req, res) => {
  //   const post = req.body;
  const newMeeting = new Meeting();

  try {
    await newMeeting.save();
    res.status(200).json({
      status: "success",
      message: "meeting created successfully !",
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getMeetings = async (req, res) => {};

export const getMeeting = async (req, res) => {};

export const addUser = async (req, res) => {
  try {
    const newMeeting = await Meeting.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { userDetails: req.body } }
    );

    res.status(200).json({
      status: "success",
      message: "user added successfully !",
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
