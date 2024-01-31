'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var config = {
    automock: true,
    collectCoverageFrom: ['**/*.ts'],
    moduleFileExtensions: ['ts', 'json'],
    rootDir: './src',
    preset: 'ts-jest',
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.ts$',
    testEnvironment: 'node',
    testEnvironmentOptions: {
        customExportConditions: ['node', 'node-addons'],
    },
    transform: {
        '.ts': '<rootDir>/node_modules/ts-jest/preprocessor.js',
    },
    verbose: true,
};
exports.default = config;
