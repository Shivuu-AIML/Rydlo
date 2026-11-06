import js from '@eslint/js'
import globals from 'globals'

export default [
  { ignores: ['node_modules', 'prisma'] },
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.node,
      parserOptions: { sourceType: 'module' },
    },
  },
]
