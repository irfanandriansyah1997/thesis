module.exports = {
    globals: {
        IntersectionObserver: true,
        innerWidth: true
    },
    collectCoverage: true,
    testURL: 'http://localhost/',
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
    moduleNameMapper: {
        '^.+\\.(css|less|scss)$': 'babel-jest'
    },
    coverageDirectory: '.jest_coverage',
    moduleFileExtensions: ['js', 'jsx', 'es6', 'ts', 'tsx'],
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.jsx$': 'babel-jest',
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.tsx$': 'ts-jest',
        '^.+\\.es6$': 'babel-jest'
    },
    transformIgnorePatterns: ['node_modules/'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupFilesAfterEnv: ['<rootDir>/etc/jest/enzyme.config.ts', '@testing-library/jest-dom/extend-expect']
};
