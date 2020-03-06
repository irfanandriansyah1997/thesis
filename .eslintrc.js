module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: ['plugin:react/recommended', 'airbnb'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', 'require-jsdoc-except'],
    rules: {
        indent: [2, 4],
        'react/jsx-indent': [1, 4],
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
