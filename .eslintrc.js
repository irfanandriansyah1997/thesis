module.exports = {
    env: {
        es6: true,
        node: true,
        jest: true,
        browser: true,
        jasmine: true
    },
    extends: [
        'airbnb',
        'plugin:react/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        typescript: true,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            experimentalDecorators: true,
            jsx: true
        }
    },
    plugins: ['react', '@typescript-eslint', 'require-jsdoc-except', 'jest'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.es6']
            },
            typescript: {
                alwaysTryTypes: true // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
            }
        }
    },
    ignorePatterns: ['lib/', 'node_modules/', 'etc/'],
    rules: {
        'import/no-unresolved': [2, { amd: true, commonjs: true }],
        'import/no-extraneous-dependencies': [
            2,
            {
                devDependencies: [
                    '**/*.test.js',
                    '**/*.spec.js',
                    '**/*.config.js',
                    '**/*.test.jsx',
                    '**/*.spec.jsx',
                    '**/*.test.ts',
                    '**/*.spec.ts',
                    '**/*.config.ts',
                    '**/*.test.tsx',
                    '**/*.spec.tsx',
                    './etc/webpack/*.js'
                ]
            }
        ],
        'import/extensions': [
            2,
            'ignorePackages',
            {
                jsx: 'never',
                tsx: 'never',
                js: 'never',
                ts: 'never'
            }
        ],
        indent: [2, 4],
        'no-console': [2, { allow: ['debug', 'error'] }],
        'react/display-name': [0],
        'react/button-has-type': [0],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] }
        ],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-props-no-spreading': [0],
        'react/prefer-stateless-function': [0],
        'react/sort-comp': [
            2,
            {
                order: [
                    'instance-variables',
                    'static-variables',
                    'static-methods',
                    'lifecycle',
                    'everything-else',
                    'render'
                ],
                groups: {
                    lifecycle: [
                        'displayName',
                        'propTypes',
                        'contextTypes',
                        'childContextTypes',
                        'mixins',
                        'statics',
                        'defaultProps',
                        'constructor',
                        'getDefaultProps',
                        'state',
                        'getInitialState',
                        'getChildContext',
                        'getDerivedStateFromProps',
                        'componentWillMount',
                        'UNSAFE_componentWillMount',
                        'componentDidMount',
                        'componentWillReceiveProps',
                        'UNSAFE_componentWillReceiveProps',
                        'shouldComponentUpdate',
                        'componentWillUpdate',
                        'UNSAFE_componentWillUpdate',
                        'getSnapshotBeforeUpdate',
                        'componentDidUpdate',
                        'componentDidCatch',
                        'componentWillUnmount'
                    ]
                }
            }
        ],
        'require-jsdoc-except/require-jsdoc': [
            2,
            {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: true,
                    ClassDeclaration: true,
                    ArrowFunctionExpression: true,
                    FunctionExpression: true
                },
                ignore: [
                    'constructor',
                    'getDerivedStateFromProps',
                    'shouldComponentUpdate',
                    'render',
                    'getSnapshotBeforeUpdate',
                    'componentDidUpdate',
                    'componentDidUpdate',
                    'componentDidMount',
                    'componentWillMount',
                    'componentWillUnmount',
                    'componentDidCatch',
                    'pageDidMount'
                ]
            }
        ],
        '@typescript-eslint/no-explicit-any': [2],
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-var-requires': 0
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/explicit-function-return-type': [2],
                '@typescript-eslint/no-var-requires': [2],
                '@typescript-eslint/no-explicit-any': [2],
                '@typescript-eslint/no-unused-vars': [2]
            }
        },
        {
            files: ['*.stories.tsx'],
            rules: {
                '@typescript-eslint/no-var-requires': [0]
            }
        }
    ]
};
