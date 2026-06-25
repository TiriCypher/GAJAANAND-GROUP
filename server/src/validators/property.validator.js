const { z } = require("zod");

const createPropertySchema =
  z.object({
    title: z
      .string()
      .min(3),

    description: z
      .string()
      .min(10),

    price: z
      .number()
      .positive(),

    purpose: z.enum([
      "sale",
      "rent",
    ]),

    type: z.enum([
      "apartment",
      "villa",
      "commercial",
      "land",
    ]),

    location: z.object({
      address: z.string(),

      city: z.string(),

      state: z.string(),

      country: z.string(),
    }),
  });

module.exports = {
  createPropertySchema,
};