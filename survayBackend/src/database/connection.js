const { mongoose } = require("mongoose");
const { logger } = require("../log/logger");

const atlasPassword = process.env.ATLASPASSWORD;
const atlasUser = process.env.ATLASUSER;
const dbName = process.env.DBNAME;

/**
 * database connection fuction
 */
const dbConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${atlasUser}:${atlasPassword}@cluster0.asghasr.mongodb.net/${dbName}`
    );
    logger.info("db connection successfull");
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { dbConnection };
