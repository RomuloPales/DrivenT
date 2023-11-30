import Joi from 'joi';

export const paymentsSchema = Joi.object({
  ticketId: Joi.number().required(),
  cardData: Joi.object({
    issuer: Joi.string().required(),
    number: Joi.string().required(),
    name: Joi.string().required(),
    expirationDate: Joi.date().required(),
    cvv: Joi.string().required(),
  }).required(),
});
