// jest.config.js

module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.ts',
    '!src/**/index.ts',
    '!src/stories/**/*.tsx',
  ],
  setupFiles: ['react-app-polyfill/jsdom'],
  resetMocks: true,
  testPathIgnorePatterns: ['/node_modules/', '/scripts/.*\\.js$'], // Ignore the node_modules folder
};
