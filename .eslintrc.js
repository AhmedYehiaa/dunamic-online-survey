module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "jest": true,
  },
  "extends": [
      "eslint:recommended",
      "airbnb",
  ],
  "parser": "babel-eslint",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module",
  },
  "plugins": [
      "babel",
      "react"
  ],
  "rules": {
    "no-debugger": "warn",
    "max-len": ["error", { "code": 140 }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-unused-expressions": ["error", { "allowShortCircuit": true }],
    "camelcase": ["warn", {"properties": "never"}],
    "no-underscore-dangle": "warn",
    "no-restricted-globals": ["error", "event", "fdescribe"],
    "jsx-a11y/label-has-associated-control": [ "error", {
        "required": {
          "some": [ "nesting", "id"  ]
        }
      }],
      "jsx-a11y/label-has-for": [ "error", {
        "required": {
          "some": [ "nesting", "id"  ]
        }
      }]
  }
};