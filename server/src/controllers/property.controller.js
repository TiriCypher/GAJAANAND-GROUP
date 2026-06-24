const Property = require("../models/property.model");
const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/apiResponse");

// TEST: Create Property
exports.createProperty = asyncHandler(async (req, res) => {
    const property = await Property.create({
        ...req.body,
        owner: req.user._id,
        createdBy: req.user._id,
    });

    return res.status(201).json(
        new ApiResponse(201, "Property created successfully", property)
    );
});

// TEST: Get All Properties
exports.getAllProperties = asyncHandler(async (req, res) => {
    const properties = await Property.find().populate("owner", "firstName lastName email");

    return res.status(200).json(
        new ApiResponse(200, "Properties fetched successfully", properties)
    );
});