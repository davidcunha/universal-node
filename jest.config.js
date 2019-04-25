module.exports = {
  testMatch: ['<rootDir>/client/components/**/*.test.js'],
  setupFiles: ['<rootDir>/client/config/enzyme.js'],
  testPathIgnorePatterns: [
    '<rootDir>/server/',
    '<rootDir>/static/',
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/setup/',
  ],
};
