import SavedProperty from "../models/savedProperty.model.js";
import Inquiry from "../models/inquiry.model.js";

// ❤️ SAVE PROPERTY
export const saveProperty = async (req, res) => {
  try {
    const userId = req.user.id;
    const { propertyId } = req.body;

    const exists = await SavedProperty.findOne({
      user: userId,
      property: propertyId,
    });

    if (exists) {
      return res.json({
        success: false,
        message: "Already saved",
      });
    }

    const saved = await SavedProperty.create({
      user: userId,
      property: propertyId,
    });

    res.json({
      success: true,
      message: "Property saved",
      data: saved,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 📩 SEND INQUIRY
export const sendInquiry = async (req, res) => {
  try {
    const { propertyId, name, phone, email, message } = req.body;

    const inquiry = await Inquiry.create({
      property: propertyId,
      name,
      phone,
      email,
      message,
      user: req.user?._id || null,
    });

    res.json({
      success: true,
      message: "Inquiry sent",
      data: inquiry,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};