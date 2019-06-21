const joi = require('joi');

const optionsSchema = joi.object().keys({
  headers: joi.object().required(),
  queryString: joi.object().required(),
  queryParams: joi.object().required(),
  body: joi.object().required(),
}).required();

const settingsSchema = joi.object().keys({
  type: joi.number().required(),
  fromName: joi.string().required(),
  toName: joi.string().required(),
}).required();

const requestSchema = joi.object().keys({
  requestId: joi.number().required(),  
  title: joi.string().required(),  
  url: joi.string().required(),
  options: optionsSchema,
  settings: settingsSchema,  
}).required();

const flowSchema = joi.object({
  title: joi.string().required(),
  requestAmount: joi.number().required(),
  requests: joi.array().items(requestSchema).required(),
}).required().options({ stripUnknown: true });

module.exports = flowSchema;
