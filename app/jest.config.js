// eslint-disable-next-line no-undef
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
    moduleNameMapper: {
        '\\.(css|less|scss)$': '<rootDir>/.jest/setup-tests.js',
    }
}