const mongoose = require("mongoose");
const schema = mongoose.Schema;

const survaySchema = new schema(
  {
    question1: String,
    question2: Array,
    question3: Array,
    question4: String,
    question5: Date,
    status:{
      type:Boolean,
      default:1
    }
  },
  {
    strict: true,
    timestamps: true,
  }
);

const survay = mongoose.model("survay", survaySchema);

module.exports = survay;
