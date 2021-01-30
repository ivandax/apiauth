const Joi = require('joi');

const registerValidation = (reqBody) => {
    const schema = Joi.object({
        name: Joi.string().required().min(6),
        email: Joi.string().email().required().min(6),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(reqBody);    
}

const loginValidation = (reqBody) => {
    const schema = Joi.object({
        email: Joi.string().email().required().min(6),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(reqBody);    
}

const assetValidation = (reqBody) => {
    const schema = Joi.object({
        name: Joi.string().required().min(6),
        type: Joi.string().min(6).required(),
    });
    return schema.validate(reqBody);    
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.assetValidation = assetValidation;


