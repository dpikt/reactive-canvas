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
    "extends": ["eslint:recommended", "plugin:import/errors"],
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
        ]
    }
}