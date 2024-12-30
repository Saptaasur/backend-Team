import express from "express";
import { createMember, uploadImage, getMembers } from "../controllers/memberController.js";

const router = express.Router();

router.post("/", createMember);
router.post("/upload", uploadImage);
router.get("/", getMembers);

export default router;
