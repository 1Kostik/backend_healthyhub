const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../utils");
const emailRegexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const userSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "Set password for user"],
    },
    email: {
      type: String,
      unique: true,
      match: emailRegexp,
      require: [true, "Email is required"],
    },
    password: {
      type: String,
      require: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
    avatar: {
      type: String,
      default: null,
    },
    verifyToken: {
      type: String,
      default: null,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);
userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().valid("starter", "pro", "business"),
});
const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});
const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid("starter", "pro", "business")
    .required()
    .messages({
      "string.base": "Subscription should be a string",
      "any.only":
        "Invalid subscription type. Valid options: starter, pro, business",
      "any.required": "Subscription is required",
    }),
});
const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "string.base": "Email should be a string",
    "string.empty": "Email cannot be empty",
    "string.pattern.base": "Enter correct email",
    "any.required": "Missing required field email",
  }),
});
const schemas = {
  emailSchema,
  registerSchema,
  loginSchema,
  updateSubscriptionSchema,
};
const User = model("user", userSchema);
module.exports = {
  User,
  schemas,
};
