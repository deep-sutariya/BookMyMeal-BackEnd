const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MediatorSchemaInfo = new Schema(
  {
    mname: {
      type: String,
      required: [true, "Provide Name !"],
      trim : true,
    },
    memail: { type: String, required: true },
    mpass: { type: String, required: true },
    morder: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: "Userinfo",
          required: true,
        },
        uage: { type: String, required: false },
        ugender: { type: String, required: false },
        type: { type: String, required: false },
        chef: { type: String, required: false },
        city: { type: String, required: false },
        area: { type: String, required: false },
        year: {
          type: Number,
          required: true,
        },
        month: {
          type: Number,
          required: true,
        },
        Day: {
          type: Number,
          required: true,
        },
        item: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("MediatorInfo", MediatorSchemaInfo);
