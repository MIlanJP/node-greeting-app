// Imported mongoose to create schema model for database
const mongoose = require("mongoose");

/**
 * Defining a Schema for Welcomegreeting database
 */
const welcomeMessageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Creating a Model for Schema

module.exports = mongoose.model("WelcomeGreeting", welcomeMessageSchema);
