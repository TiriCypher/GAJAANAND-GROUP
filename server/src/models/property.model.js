const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },

        purpose: {
            type: String,
            enum: ["sale", "rent"],
            required: true,
        },

        type: {
            type: String,
            enum: [
                "apartment",
                "villa",
                "plot",
                "office",
                "shop",
                "bungalow",
            ],
            required: true,
        },

        status: {
            type: String,
            enum: ["available", "sold", "rented"],
            default: "available",
        },

        location: {
            address: {
                type: String,
                required: true,
            },
            city: {
                type: String,
                required: true,
            },
            state: {
                type: String,
                required: true,
            },
            country: {
                type: String,
                default: "India",
            },
            coordinates: {
                lat: Number,
                lng: Number,
            },
        },

        details: {
            bedrooms: Number,
            bathrooms: Number,
            area: Number, // sqft
            parking: Number,
        },

        amenities: [
            {
                type: String,
            },
        ],

        images: [
            {
                url: String,
                public_id: String,
            },
        ],

        featured: {
            type: Boolean,
            default: false,
        },

        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

// Indexing for performance (VERY IMPORTANT for real estate apps)
propertySchema.index({ price: 1 });
propertySchema.index({ city: 1 });
propertySchema.index({ type: 1 });

module.exports = mongoose.model("Property", propertySchema);