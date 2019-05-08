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
    "react/jsx-filename-extension": "off"
  }
};
