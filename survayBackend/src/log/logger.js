const pino = require("pino");

/**
 * logger config
 */
const logger = pino({
  transport: {
    targets: [
      {
        level: "trace",
        target: "pino-pretty",
        options: {
          translateTime: "SYS:yyyy-dd-mm, h:MM:ss TT",
          ignore: "pid,hostname",
          destination: `${__dirname}/logger.log`,
        },
      },
      {
        level: "info",
        target: "pino-pretty",
        options: {
          translateTime: "SYS:yyyy-dd-mm, h:MM:ss TT",
          ignore: "pid,hostname",
        },
      },
    ],
  },
});

module.exports = { logger };
