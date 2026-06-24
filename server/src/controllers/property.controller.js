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
    const {
        city,
        type,
        purpose,
        minPrice,
        maxPrice,
        featured,
        sort,
        page = 1,
        limit = 10,
    } = req.query;

    // 🧠 BUILD DYNAMIC FILTER OBJECT
    let filter = {};

    if (city) {
        filter["location.city"] = city;
    }

    if (type) {
        filter.type = type;
    }

    if (purpose) {
        filter.purpose = purpose;
    }

    if (featured) {
        filter.featured = featured === "true";
    }

    // 💰 PRICE RANGE FILTER
    if (minPrice || maxPrice) {
        filter.price = {};
        if (minPrice) filter.price.$gte = Number(minPrice);
        if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    // 🔃 SORTING LOGIC
    let sortOption = {};

    if (sort === "price_asc") {
        sortOption.price = 1;
    } else if (sort === "price_desc") {
        sortOption.price = -1;
    } else {
        sortOption.createdAt = -1; // default newest first
    }

    // 📄 PAGINATION LOGIC
    const skip = (Number(page) - 1) * Number(limit);

    // 🚀 DATABASE QUERY
    const properties = await Property.find(filter)
        .populate("owner", "firstName lastName email")
        .sort(sortOption)
        .skip(skip)
        .limit(Number(limit));

    // 📊 TOTAL COUNT (for frontend pagination)
    const total = await Property.countDocuments(filter);

    return res.status(200).json(
        new ApiResponse(200, "Properties fetched successfully", {
            properties,
            pagination: {
                total,
                page: Number(page),
                limit: Number(limit),
                totalPages: Math.ceil(total / limit),
            },
        })
    );
});