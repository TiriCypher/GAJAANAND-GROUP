const cloudinary = require("../config/cloudinary");

const uploadToCloudinary = async (fileBuffer, folder = "gajaanand") => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            {
                folder,
                resource_type: "image",
            },
            (error, result) => {
                if (error) return reject(error);
                resolve(result);
            }
        ).end(fileBuffer);
    });
};

module.exports = uploadToCloudinary;