var Joi = require('joi');

module.exports = {
  body: {
    title: Joi.string().email(),
    section: Joi.string(),
    type: Joi.string,
    priority: Joi.string,
    estimate: Joi.string,
    reference: Joi.string,
    status: Joi.string,
    review: Joi.string,
    preconditions: Joi.string,
    summary: Joi.string,
    steps: Joi.string,
    expected_results: Joi.string

  }
};

//
// var TestCaseSchema = {
//     type: 'object',
//     properties: {
//         title: {
//             type: 'string',
//             required: true
//         },
//         section: {
//             type: 'string',
//             required: false
//         },
//         type: {
//             type: 'string',
//             required: false,
//             enum: ['Functional', 'Regression', 'Integration']
//         },
//         priority: {
//             type: 'string',
//             required: false
//         },
//         estimate: {
//             type: 'string',
//             required: false
//         },
//         reference: {
//             type: 'string',
//             required: false
//         },
//         status: {
//             type: 'string',
//             required: false
//         },
//         review: {
//             type: 'string',
//             required: false
//         },
//         preconditions: {
//             type: 'string',
//             required: false
//         },
//         summary: {
//             type: 'string',
//             required: false
//         },
//         steps: {
//             type: 'string',
//             required: true
//         },
//         expected_results: {
//             type: 'string',
//             required: false
//         },
//     }
// }
