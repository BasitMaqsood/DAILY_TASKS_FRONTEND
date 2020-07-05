import Joi from "joi-browser";

const signInSchema = {
  email: Joi.string()
    .email()
    .required()
    .label("Email")
    .regex(/\b.+@[^].*\.[a-z]{2,}\b/),
  password: Joi.string().required().label("Password"),
};

const taskSchema = {
  name: Joi.string().required().max(12).label("Task"),
};

export { signInSchema, taskSchema };
