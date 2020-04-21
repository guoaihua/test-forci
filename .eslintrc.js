module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb-base",
    "env": {
        "browser": true,
        "node": true
    },
    "rules": {
        "array-callback-return": ["off"],
        "no-unused-expressions": ["error", {"allowShortCircuit": true}],
        "global-require": ["off"]
    }
}
