import Member from "../models/member.js";
import multer from "multer";

const upload = multer({ dest: "uploads/" });

export const createMember = async (req, res) => {
  try {
    const { name, teamId, uniqueId } = req.body;
    const member = await Member.create({ name, teamId, uniqueId });
    res.status(201).json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const uploadImage = [
  upload.single("profileImage"),
  async (req, res) => {
    try {
      const { memberId } = req.body;
      const member = await Member.findById(memberId);

      if (!member) return res.status(404).json({ error: "Member not found" });

      member.imagePath = req.file.path;
      member.status = "Image Uploaded";
      await member.save();

      res.status(200).json(member);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
];

export const getMembers = async (req, res) => {
  try {
    const members = await Member.find().populate("teamId");
    res.status(200).json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
