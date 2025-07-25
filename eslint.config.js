// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { plugin as tanstackQueryPlugin } from '@tanstack/eslint-plugin-query';
import { globalIgnorePatterns } from 'eslint/config';

export default tseslint.config([
    globalIgnorePatterns(['dist']),

    {
        plugins: {
            '@tanstack/query': tanstackQueryPlugin,
        },
    },

    {
        files: ['**/*.{ts,tsx}'],
        ignores: [],
        plugins: {
            '@tanstack/query': tanstackQueryPlugin,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            globals: {
                ...globals.browser,
            },
        },
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
        rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
        },
    },

    js.configs.recommended,
    tseslint.configs.recommended,
    reactHooks.configs['recommended-latest'],
    reactRefresh.configs.vite,
]);
