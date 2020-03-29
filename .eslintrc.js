module.exports = {
    "env": {
        "es6": true
    },
    parser: "@typescript-eslint/parser", // specifies the ESLint parser
    extends: [
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    rules: {
        // place to specify ESLint rules that may overwrite specified rules.
    }
};
