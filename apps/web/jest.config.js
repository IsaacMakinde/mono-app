const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your tsconfig.json so that your tests are compiled using the same rules as your app
  dir: "./",
});

// Add any custom config to be passsed to Jest

const CustomJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically added to your existing moduleNameMapper if you have one)
  },
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(CustomJestConfig);
