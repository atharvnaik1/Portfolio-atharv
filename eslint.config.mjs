import { defineConfig, globalIgnores } from 'eslint/config';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const eslintConfig = defineConfig([
  globalIgnores(['node_modules', '.next', 'out', 'next-env.d.ts']),
  nextCoreWebVitals,
  nextTypescript,
  eslintPluginPrettierRecommended,
  {
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'warn',
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto', // Handles line ending errors
          bracketSameLine: false, // Ensures consistent bracket spacing
          trailingComma: 'none' // Disables trailing commas
        }
      ]
    }
  }
]);

export default eslintConfig;
