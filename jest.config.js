module.exports = {
  clearMocks: true,
  moduleFileExtensions: ["ts", "tsx", "js"],
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/__tests__/**/*.test.{js,jsx,ts,tsx}"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1"
  },
  setupFilesAfterEnv: ["./__tests__/setupTests.ts"],
  globals: {
    "ts-jest": {
      diagnostics: false
    }
  }
};
