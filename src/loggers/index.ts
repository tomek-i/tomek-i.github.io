import pino from 'pino';

import { config } from '../configuration/config';

//NOTE: https://developer.mozilla.org/en-US/docs/Web/API/console#Usage
//NOTE: https://developer.chrome.com/docs/devtools/console/api/#styling_console_output_with_css

//TODO: sentry free alternatie to azure?  https://sentry.io/pricing/?gclid=Cj0KCQjwr82iBhCuARIsAO0EAZwSdOt9lLbe_JrRFnXmt8D2lHZK_5lFiLYXuZVVXpkTJU1AejQ8BgQaAvfFEALw_wcB&gclid=Cj0KCQjwr82iBhCuARIsAO0EAZwSdOt9lLbe_JrRFnXmt8D2lHZK_5lFiLYXuZVVXpkTJU1AejQ8BgQaAvfFEALw_wcB&original_referrer=https%3A%2F%2Fwww.google.com%2F&utm_campaign=9657410528&utm_content=g&utm_medium=cpc&utm_source=google&utm_term=sentry.io

export const logger = pino({
  level: config.logLevel,
});

//TODO: add wrapper that alows to add multiple loggers and then sends it to all of them based on levels

export default logger;
