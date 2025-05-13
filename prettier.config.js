/** @type {import('prettier').Options} */
module.exports = {
  singleQuote: true,
  semi: false,
  printWidth: 160,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'none',
  arrowParens: 'avoid',
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx'],
  tailwindStylesheet: './src/styles/tailwind.css',
};
