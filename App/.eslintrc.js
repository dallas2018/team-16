module.exports = {
  extends: ["standard", "standard-react"],
  rules: {
    semi: [2, "always"],
    "react/prop-types": 0,
    quotes: ["error", "double"]
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true
  },
  env: {
    browser: true
  }
};
