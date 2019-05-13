module.exports = {
  env: {
    browser: true,
    node: true, // understand require keyword;
    jest: true
  },
  // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
  extends: ["airbnb", "plugin:prettier/recommended"],
  parser: "babel-eslint", // for  state = { toggle: false} // Unexpected token = (which is purely a babel syntax); @babel/plugin-proposal-class-properties
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": "off",
    "react/prop-types":"off",
    "import/no-extraneous-dependencies":"off",
    "lines-between-class-members":"off",
    "react/sort-comp":"off",
    "react/jsx-one-expression-per-line":"off",
    "react/no-array-index-key":"off",
    "react/button-has-type":"off"
  }
};
