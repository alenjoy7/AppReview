const { logger } = require("../log/logger");

/**
 * middleware function for logging
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const defaultLogger = (req, res, next) => {
  logger.info(`${req.method} - ${req.path}`)
  next();
};
module.exports = { defaultLogger };
