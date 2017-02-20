module.exports = {
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
          "jsx": true
        }
    },
    "env": {
        "browser": true,
        "commonjs": true
    },
    "extends": ["eslint:recommended", "plugin:import/errors", "plugin:react/recommended"],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-console": [
            "warn"
        ],
        "react/prop-types": "off",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error"
    },
    "plugins": [
        "react"
    ],
    "settings": {
        "react": {
          "createClass": "create", // Regex for Component Factory to use, default to "createClass"
          "pragma": "Canvas"  // Pragma to use, default to "React"
        }
    }
}