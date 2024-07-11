module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "simple-import-sort"],
  rules: {
    "react/jsx-props-no-spreading": "off", //spread 연산자가 ESLint의 권장사항이 아니라고 함 (그치만 사용할 수 있으니 off 해둘게요)
    "react/react-in-jsx-scope": "off",
    "simple-import-sort/imports": "error",
    "eol-last": ["error", "always"],
    "no-multi-spaces": "error",
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
  },
};
