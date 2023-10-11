const {
  addSurvayController,
  getSurvayResultController,
} = require("../controllers/survayController");
const {
  survayValidation,
} = require("../middlewares/validations/survayValidation");

const survayRouter = require("express").Router();

survayRouter.post(
  "/add-survay",
  survayValidation("add"),
  addSurvayController
);
survayRouter.get("/get-survay-result", getSurvayResultController);

module.exports = { survayRouter };
