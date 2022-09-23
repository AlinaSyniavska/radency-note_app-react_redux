import Joi from "joi";
import {noteCategory, noteStatus} from "../constants";

const noteValidator = Joi.object({
    name: Joi.string().regex(/^(?=.*[a-zA-ZА-яёЁіІїЇ\d])[a-zA-ZА-яёЁіІїЇ\d _&-]{2,100}$/).messages({
        'string.pattern.base': 'Тільки букви, числа: мінімум 2 символ, максимум 100'
    }).required(),
    content: Joi.string().regex(/^(?=.*[a-zA-ZА-яёЁіІїЇ\d])[a-zA-ZА-яёЁіІїЇ\d _&-]{2,100}$/).messages({
        'string.pattern.base': 'Тільки букви, числа: мінімум 2 символ, максимум 100'
    }).required(),
    created: Joi.date().required(),
    category: Joi.valid(...Object.values(noteCategory)).required(),
    noteStatus: Joi.valid(...Object.values(noteStatus)),
    dates: Joi.array().items(Joi.string()),
});

export {
    noteValidator,
}