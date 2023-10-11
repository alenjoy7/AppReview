const { validationResult } = require("express-validator");
const {
  addSurvayService,
  getSurvayResultService,
} = require("../services/survayService");

/**
 * functin to register survay data
 * @param {*} req
 * @param {*} res
 * @returns
 */
const addSurvayController = async (req, res) => {
  try {
    /**
     * check for validation error in request (body,query,params)
     */
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).send({ message: errors.errors[0].msg });

    await addSurvayService(req.body);
    res.status(201).send({ message: "survay added" });
  } catch (error) {
    res.status(404).send({ message: error?.message });
  }
};

/**
 * function to get survay result
 * @param {*} req
 * @param {*} res
 */
const getSurvayResultController = async (req, res) => {
  try {
    const response = await getSurvayResultService(req.user);
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send({ message: error?.message });
  }
};
module.exports = {
  addSurvayController,
  getSurvayResultController,
};
