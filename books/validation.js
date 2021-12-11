const Joi = require("joi");

exports.validateBooks = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().min(4).max(20).required(),
  noOfPages: Joi.number().required(),
  publisher: Joi.string().required(),
  
});
