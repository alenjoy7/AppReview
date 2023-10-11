const { body } = require("express-validator");

let items = ["Daily", "Weekly", "Monthly", "Rarely", "First time"];

const itemsMulti = [
  "Information",
  "Chat",
  "Entertainment",
  "Buy",
  "Socialize",
  "Other",
];
const range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const survayValidation = (requestCondition) => {
  switch (requestCondition) {
    case "add":
      return [
        body("question1")
          .trim()
          .notEmpty()
          .custom((value) => {
            if (!items.includes(value)) {
              throw new Error("Only value from the menu can be added");
            }
            return true;
          }),
        body("question2")
          .isArray({ min: 1 })
          .withMessage("should be an array with atleast 1 item")
          .custom((value) => {
            if (!itemsMulti.some((val) => value.includes(val))) {
              throw new Error("Only value from the menu can be added");
            }
            return true;
          }),
        body("question3")
          .isArray({ min: 1 })
          .withMessage("should be an array with atleast 1 item")
          .custom((value) => {
            if (!range.some((val) => value.includes(val))) {
              throw new Error("Only value from the range can be added");
            }
            return true;
          }),
        body("question4").trim().notEmpty().isLength({ min: 2, max: 50 }),
        body("question5")
          .isDate()
          .withMessage("Enter date in correct format")
          .custom((value) => {
            const currentDate = new Date();
            let date = new Date(value);
            currentDate.setHours(0, 0, 0, 0);
            date.setHours(0, 0, 0, 0);
            if (date < currentDate) {
              throw new Error(
                "dob date should be less than or equal to todays date"
              );
            }
            return true;
          }),
      ];
    default:
      return [];
  }
};

module.exports = { survayValidation };
