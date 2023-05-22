import pino from 'pino';

//TODO: implement azure app insight
// https://dev.to/shubhamagarwal/implement-azure-application-insights-with-react-3ecl
// https://mahdi-karimipour.medium.com/monitoring-logging-and-instrumentation-for-react-single-page-application-with-azure-application-ebdd334bcb46

const send = async function (level: pino.Level, logEvent: pino.LogEvent) {
  //TODO: get endpoint and or from SDK for azur appinsight
  const url = '<azureAppInsight>';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: 'Basic <token>',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([logEvent]),
  });
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
