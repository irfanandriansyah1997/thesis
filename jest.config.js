module.exports = {
    globals: {
        IntersectionObserver: true,
        innerWidth: true
    },
    collectCoverage: true,
    testURL: 'http://localhost/',
    collectCoverageFrom: [
        '!lib/*.js',
        '!src/*.svg',
        '!src/*.scss',
        '!src/*.less',
        '!lib/**/*.js',
        'src/**/*.{js,jsx,ts,tsx}',
        '!.storybook/*.{js,jsx,ts,tsx}',
        '!src/**/*.mock.{js,jsx,ts,tsx}',
        '!.storybook/**/*.{js,jsx,ts,tsx}',
        '!documentation/*.{js,ts,jsx,tsx}',
        '!src/**/*.constant.{js,jsx,ts,tsx}',
        '!documentation/**/*.{js,ts,jsx,tsx}',
        '!src/documentation/*.{js,jsx,ts,tsx}',
        '!src/**/documentation-*.{js,jsx,ts,tsx}',
        '!src/**/documentation.*.{js,jsx,ts,tsx}',
        '!src/**/*documentation*.{js,jsx,ts,tsx}',
        '!src/**/*.documentation.{js,jsx,ts,tsx}',
        '!src/documentation/**/*.{js,ts,jsx,tsx}'
    ],
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
    setupFilesAfterEnv: [
        '<rootDir>/etc/jest/enzyme.config.ts',
        '@testing-library/jest-dom/extend-expect'
    ]
};
