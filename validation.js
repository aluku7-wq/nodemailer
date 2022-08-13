/** @format */

// register vlidation
const joi = require("@hapi/joi");

const messavalidation = (data) => {
  const schema = joi.object({
    name: joi.string().required(),
    email: joi.string().required().email(),
    message: joi.string().required(),
  });
  return schema.validate(data);
};
module.exports = { messavalidation };
