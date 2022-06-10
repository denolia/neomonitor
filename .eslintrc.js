module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },

  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "import/prefer-default-export": ["off"],
    "no-unused-vars": ["off"],
    "@typescript-eslint/no-unused-vars": ["warn"],
    quotes: [2, "double"],
    "max-len": ["error", { code: 120 }],
    "import/extensions": ["error", "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
};
