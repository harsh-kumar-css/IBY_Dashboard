import express from "express";

const router = express.Router();
import {
  getMeetings,
  getMeeting,
  createMeeting,
  addUser,
} from "../controllers/meetingsController.js";

router.get("/getMeetings", getMeetings);
router.get("/getMeeting", getMeeting);
router.post("/createMeeting", createMeeting);
router.patch("/addUser/:id", addUser);

export default router;
