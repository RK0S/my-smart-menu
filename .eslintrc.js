module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'plugin:storybook/recommended'],
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'linebreak-style': 'off',
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/react-in-jsx-scope': 'off',
        'react/display-name': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                argsIgnorePattern: '^_',
                ignoreRestSiblings: true,
                destructuredArrayIgnorePattern: '^_'
            }
        ],
        'no-console': ['warn'],
        'react/self-closing-comp': [
            'error',
            {
                component: true,
                html: true
            }
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 'error',
        'react/no-array-index-key': 'error',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': 'error',
        'comma-dangle': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'no-undef': 'off',
        'react/button-has-type': 'off',
        'arrow-body-style': 'off',
        'object-curly-newline': 'off',
        'max-len': ['error', { ignoreComments: true, code: 100 }]
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};
