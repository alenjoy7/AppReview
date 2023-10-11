const survay = require("../models/survayModel");

const questionArray = [
  "How often do you use this app?",
  "Main app goal?",
  "Rate user experience (1-10):",
  "Suggest any improvements:",
  "Enter your birthday?",
];
/**
 *  function to create new survay data
 * @param {*} param0
 */
const addSurvayService = async ({
  question1,
  question2,
  question3,
  question4,
  question5,
}) => {
  await survay.create({
    question1,
    question2,
    question3,
    question4,
    question5,
  });
};

/**
 * function get survay data
 * @returns survay result
 */
const getSurvayResultService = async () => {
  let response = await survay.findOne({ status: 1 }).sort({ createdAt: -1 });
  let data = [];
  for (const index in questionArray) {
    let temp = Number(index) + 1;
    data.push({
      question: questionArray[index],
      answer: response["question" + temp],
    });
  }

  return data;
};

module.exports = {
  addSurvayService,
  getSurvayResultService,
};
