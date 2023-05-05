import pino from 'pino';

//TODO: implement chalk ? or https://stackoverflow.com/questions/7505623/colors-in-javascript-console

const send = async function (level: pino.Level, logEvent: pino.LogEvent) {
  switch (level) {
    case 'fatal':
    case 'error':
    case 'warn':
    case 'info':
    case 'debug':
    case 'trace':

    default:
      console.log(`[${logEvent.ts}] [${logEvent.level}]: ${logEvent.messages}`);
      break;
  }
};

const logger = pino({
  browser: {
    serialize: true,
    asObject: true,
    transmit: {
      send,
    },
  },
});

export default logger;
