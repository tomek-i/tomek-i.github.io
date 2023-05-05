import { getConfig, getLocalConfig } from './config';

jest.mock('./get-local.config', () => ({
  getLocalConfig: () => ({ environment: 'local' }),
}));
jest.mock('./get-production.config', () => ({
  getProductionConfig: () => ({ environment: 'production' }),
}));

describe('the configuration', () => {
  it('defaults to the local environment', () => {
    expect(getConfig({})).toHaveProperty('environment', 'local');
  });

  it('returns the local config for a local environment', () => {
    expect(getConfig({ ENV: 'local' })).toHaveProperty('environment', 'local');
  });

  it('returns the production config for a production environment', () => {
    expect(getConfig({ ENV: 'production' })).toHaveProperty(
      'environment',
      'production'
    );
  });
});

describe('the local configuration', () => {
  it('prefers the log level from the environment', () => {
    expect(getLocalConfig({ LOG_LEVEL: 'fatal' })).toHaveProperty(
      'logLevel',
      'fatal'
    );
  });

  it('defaults the log level to debug', () => {
    expect(getLocalConfig({})).toHaveProperty('logLevel', 'debug');
  });
});
