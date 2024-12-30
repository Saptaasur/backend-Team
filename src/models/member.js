import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  teamId: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
  uniqueId: { type: String, required: true, unique: true },
  imagePath: { type: String, default: null },
  status: { type: String, enum: ["Image Uploaded", "Image Not Uploaded"], default: "Image Not Uploaded" },
});

export default mongoose.model("Member", MemberSchema);
