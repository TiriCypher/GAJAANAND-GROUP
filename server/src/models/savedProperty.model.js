import mongoose from "mongoose";

const savedSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
    },
  },
  { timestamps: true }
);

export default mongoose.model("SavedProperty", savedSchema);