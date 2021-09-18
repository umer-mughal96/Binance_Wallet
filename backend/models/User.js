const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      unique: false,
      required: true,
    },
   
    password: {
      type: String,
      required: true,
    },
    walletID: {
      type: String,
      required: true,
    },
    userKeychain: {
      type: String,
      required: true,
    },
    backupKeychain: {
      type: String,
      required: true,
    },
    

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
