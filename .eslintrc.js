module.exports = {
    env: {
        es6: true,
        node: true,
        jest: true,
        browser: true,
        jasmine: true
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
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
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    },
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
                    '**/*.spec.tsx'
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
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/jsx-indent': [2, 4],
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
        ]
    }
};
