const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    Maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minLength: 3,
    Maxlength: 50,
  },
  fruits: {
    apple: {
      type: Number,
      min: 0,
      max: 100,
    },
    banana: {
      type: Number,
      min: 0,
      max: 100,
    },
  },
});

// 增加屬於 schema 的 methods
userSchema.methods.totalFruits = function () {
  return this.fruits.apple + this.fruits.banana;
};

userSchema.methods.addApple = function () {
  this.fruits.apple++;
};

// 增加 Schema的 static methods
// 讓所有User的 Apple都設定為0
userSchema.statics.setZeroToAllApple = function () {
  return this.updateMany({}, { "fruits.apple": 0 });
};

module.exports = mongoose.model("User", userSchema);
