const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../utils");

const emailRegexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      minLength: 2,
      maxLength: 30,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    goal: {
      type: String,
      // enum: ["Lose Fat", "Maintain", "Gain Muscle"],
      // default: "Lose Fat",
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      default: null,
    },
    age: {
      type: Number,
      default: null,
    },
    height: {
      type: Number,
      default: null,
    },
    weight: {
      type: Number,
      default: null,
    },
    token: {
      type: String,
      default: null,
    },
    // verifyToken: {
    //   type: String,
    //   default: null,
    // },
    // verified: {
    //   type: Boolean,
    //   default: false,
    // },
    activity: {
      type: Number,
      default: null,
    },
    avatarURL: {
      type: String,
      default: null,
    },
    idCloudAvatar:{
      type:String,
      default: null
    }
  },

  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
  name: Joi.string().min(2).max(30).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).max(16).required(),
  goal: Joi.string(),
  gender: Joi.string().valid("male", "female"),
  age: Joi.number(),
  height: Joi.number(),
  weight: Joi.number(),
  activity: Joi.number(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const userUpdate = Joi.object({
  height: Joi.number().required(),
  weight: Joi.number().required(),
  age: Joi.number().required(),
});

const userSchemas = { loginSchema, registerSchema, userUpdate };

const User = model("user", userSchema);

module.exports = {
  User,
  userSchemas,
};
