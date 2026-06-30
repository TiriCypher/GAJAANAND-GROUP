const User = require("../models/user.model");
const Property = require("../models/property.model");

const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/apiResponse");

exports.saveProperty = asyncHandler(
    async (req, res) => {
        const { propertyId } = req.params;

        const property =
            await Property.findById(propertyId);

        if (!property) {
            return res.status(404).json(
                new ApiResponse(
                    404,
                    "Property not found"
                )
            );
        }

        const user =
            await User.findById(req.user.id);

        const alreadySaved =
            user.savedProperties.includes(
                propertyId
            );

        if (alreadySaved) {
            return res.status(400).json(
                new ApiResponse(
                    400,
                    "Property already saved"
                )
            );
        }

        user.savedProperties.push(propertyId);

        await user.save();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Property saved successfully"
            )
        );
    }
);

exports.getSavedProperties =
    asyncHandler(async (req, res) => {
        const user =
            await User.findById(req.user.id)
                .populate("savedProperties");

        return res.status(200).json(
            new ApiResponse(
                200,
                "Saved properties fetched",
                user.savedProperties
            )
        );
    });

exports.removeSavedProperty =
    asyncHandler(async (req, res) => {
        const { propertyId } = req.params;

        const user =
            await User.findById(req.user.id);

        user.savedProperties =
            user.savedProperties.filter(
                (id) =>
                    id.toString() !== propertyId
            );

        await user.save();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Property removed successfully"
            )
        );
    });