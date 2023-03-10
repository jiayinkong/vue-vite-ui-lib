module.exports = {
    root: true,
    env: {
      node: true,
      browser: true,
    },
    parserOptions: {
      parser: '@typescript-eslint/parser', // 解析 .vue 文件里面的 script 标签
      sourceType: 'module',
      ecmaVersion: 12,
    },
    plugins: ['vue', '@typescript-eslint'],
    extends: ['plugin:vue/recommended', 'plugin:prettier/recommended'],
    rules: {
      indent: ['warn', 2],
      'vue/require-default-prop': 'off',
      'vue/no-multiple-template-root': 0,
      'import/no-extraneous-dependencies': 0,
      'import/no-unresolved': 0,
      'no-var': 'error',
      'no-shadow': 0,
      'no-confusing-arrow': 0,
      'no-param-reassign': 0,
      'no-duplicate-imports': 'error',
      'no-useless-escape': 0,
      indent: ['error', 2, { SwitchCase: 1 }],
      camelcase: 0,
      'new-cap': 0,
      'max-len': 0,
      'consistent-return': 0,
      'default-case': 2,
      'rest-spread-spacing': 'error',
      'prefer-const': 'error',
      'arrow-spacing': 'error',
      'prefer-destructuring': ['error', { object: true, array: false }],
    },
  }
  