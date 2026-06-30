const Inquiry = require("../models/inquiry.model");
const Visit = require("../models/visit.model");

const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/apiResponse");

exports.createInquiry =
  asyncHandler(async (req, res) => {
    const inquiry =
      await Inquiry.create({
        ...req.body,
        user: req.user?.id || null,
      });

    return res.status(201).json(
      new ApiResponse(
        201,
        "Inquiry submitted successfully",
        inquiry
      )
    );
  });

  exports.scheduleVisit =
  asyncHandler(async (req, res) => {
    const visit =
      await Visit.create({
        ...req.body,
        user: req.user?.id || null,
      });

    return res.status(201).json(
      new ApiResponse(
        201,
        "Visit scheduled successfully",
        visit
      )
    );
  });