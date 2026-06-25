const Property = require("../models/property.model");
const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/apiResponse");
const uploadToCloudinary = require("../utils/uploadToCloudinary");
const ApiError = require("../utils/ApiError");

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

exports.uploadPropertyImages = asyncHandler(async (req, res) => {
    const files = req.files;

    if (!files || files.length === 0) {
        return res.status(400).json(
            new ApiResponse(400, "No images uploaded")
        );
    }

    const uploadResults = [];

    for (let file of files) {
        const result = await uploadToCloudinary(file.buffer, "properties");

        uploadResults.push({
            url: result.secure_url,
            public_id: result.public_id,
        });
    }

    return res.status(200).json(
        new ApiResponse(200, "Images uploaded successfully", uploadResults)
    );
});

exports.attachPropertyImages = asyncHandler(async (req, res) => {
    const { propertyId } = req.params;

    const property = await Property.findById(propertyId);

    if (!property) {
        throw new ApiError(
            404,
            "Property not found"
        );
    }

    if (!req.files || req.files.length === 0) {
        return res.status(400).json(
            new ApiResponse(
                400,
                "No images uploaded"
            )
        );
    }

    const uploadedImages = [];

    for (const file of req.files) {
        const result = await uploadToCloudinary(
            file.buffer,
            "properties"
        );

        uploadedImages.push({
            url: result.secure_url,
            public_id: result.public_id,
        });
    }

    property.images.push(...uploadedImages);

    await property.save();

    return res.status(200).json(
        new ApiResponse(
            200,
            "Property images uploaded successfully",
            property
        )
    );
});

exports.getPropertyById = asyncHandler(async (req, res) => {
    const property = await Property.findById(
        req.params.id
    ).populate(
        "owner",
        "firstName lastName email"
    );

    if (!property) {
        return res.status(404).json(
            new ApiResponse(
                404,
                "Property not found"
            )
        );
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            "Property fetched successfully",
            property
        )
    );
});

exports.getSimilarProperties =
    asyncHandler(async (req, res) => {
        const property =
            await Property.findById(
                req.params.id
            );

        if (!property) {
            return res.status(404).json(
                new ApiResponse(
                    404,
                    "Property not found"
                )
            );
        }

        const similar =
            await Property.find({
                _id: {
                    $ne: property._id,
                },
                type: property.type,
                "location.city":
                    property.location.city,
            })
                .limit(6)
                .populate(
                    "owner",
                    "firstName lastName"
                );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Similar properties fetched",
                similar
            )
        );
    });

exports.getFeaturedProperties =
    asyncHandler(async (req, res) => {
        const properties =
            await Property.find({
                featured: true,
            })
                .limit(8)
                .sort({
                    createdAt: -1,
                });

        return res.status(200).json(
            new ApiResponse(
                200,
                "Featured properties fetched",
                properties
            )
        );
    });