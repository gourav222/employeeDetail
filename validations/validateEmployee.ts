import Joi from "@hapi/joi";

const validateEmployee = Joi.object({
  name: Joi.string().required(),
  title: Joi.string().required(),
  annualSalary: Joi.number().required(),
  department: Joi.string().required(),
});

export { validateEmployee };
