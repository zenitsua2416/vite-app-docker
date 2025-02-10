/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest', //REQUIRED
    testEnvironment: "jsdom", //REQUIRED
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js", // REQUIRED FOR CSS IMPORTS
    } 
  };