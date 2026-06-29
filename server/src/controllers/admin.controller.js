const Property = require("../models/property.model");
const User = require("../models/user.model");
const Inquiry = require("../models/inquiry.model");
const Lead = require("../models/lead.model");

const getDashboardStats = async (req, res) => {
    try {
        const properties =
            await Property.countDocuments();

        const users =
            await User.countDocuments();

        const inquiries =
            await Inquiry.countDocuments();

        const leads =
            await Lead.countDocuments();

        res.json({
            success: true,
            data: {
                properties,
                users,
                inquiries,
                leads,
            },
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const getAllUsers =
    async (req, res) => {
        try {
            const users =
                await User.find()
                    .select("-password")
                    .sort({
                        createdAt: -1,
                    });

            res.json({
                success: true,
                count: users.length,
                data: users,
            });
        } catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    };

const getAllProperties =
    async (req, res) => {
        const properties =
            await Property.find()
                .sort("-createdAt");

        res.json({
            success: true,
            data: properties,
        });
    };

const deleteProperty =
    async (req, res) => {
        await Property.findByIdAndDelete(
            req.params.id
        );

        res.json({
            success: true,
            message:
                "Property deleted",
        });
    };
const getAllLeads =
    async (req, res) => {
        const leads =
            await Lead.find();

        res.json({
            success: true,
            data: leads,
        });
    };

const getAllInquiries =
    async (req, res) => {
        const inquiries =
            await Inquiry.find()
                .populate("property")
                .sort("-createdAt");

        res.json({
            success: true,
            data: inquiries,
        });
    };

const createProperty = async (
    req,
    res
) => {
    try {
        const property =
            await Property.create({
                ...req.body,

                owner: req.user._id,

                createdBy:
                    req.user._id,
            });

        res.json({
            success: true,
            data: property,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};

const getPropertyById = async (
    req,
    res
) => {
    try {
        const property =
            await Property.findById(
                req.params.id
            );

        if (!property) {
            return res.status(404).json({
                message:
                    "Property not found",
            });
        }

        res.json({
            success: true,
            data: property,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};

const updateProperty = async (
    req,
    res
) => {
    try {
        const property =
            await Property.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                }
            );

        res.json({
            success: true,
            data: property,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};

module.exports = {
    getDashboardStats,
    getAllUsers,
    getAllProperties,
    deleteProperty,
    getAllLeads,
    getAllInquiries,
    createProperty,
    getPropertyById,
    updateProperty,
};