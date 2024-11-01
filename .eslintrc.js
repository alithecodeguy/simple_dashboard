module.exports = {
  extends: ['next', 'prettier', 'next/core-web-vitals'],
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'prefer-const': 'error',
    'react-hooks/exhaustive-deps': 'error'
  },
  ignorePatterns: ['src/test/*', 'public/*', 'hoc/*']
};
