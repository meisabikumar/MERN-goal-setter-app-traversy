const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var goalSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true,'please add a text value'],
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Goal ", goalSchema);
