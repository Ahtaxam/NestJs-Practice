import * as Joi from "joi"
export const createJobSchema = Joi.object({
    name:Joi.string().required(),
    title:Joi.string().required(),
    type:Joi.string().required(),
    email:Joi.string().email(),
    tags:Joi.array().items(Joi.string()).min(0),
    salary:Joi.number()
})