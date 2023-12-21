const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MediatorSchemaInfo = new Schema(
  {
    mname: {
      type: String,
      required: [true, "Provide Name !"],
      trim: true,
    },
    memail: { type: String, required: true },
    mpass: { type: String, required: true },
    morder: [
      {
        uage: { type: String, required: false },
        ugender: { type: String, required: false },
        type: { type: String, required: false },
        chef: { type: String, required: false },
        city: { type: String, required: false },
        area: { type: String, required: false },
        year: {
          type: String,
          required: true,
        },
        month: {
          type: String,
          required: true,
        },
        day: {
          type: String,
          required: true,
        },
        item: {
          type: String,
          required: true,
        },
      },
    ],
    restaurant: [
      {
        rname: { type: String, required: false, trim: true },
        remail: { type: String, required: false },
        rphone: { type: String, required: false },
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("MediatorInfo", MediatorSchemaInfo);