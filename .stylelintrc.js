module.exports = {
    "extends": "stylelint-config-standard",
    "rules": {
        "at-rule-no-unknown": [
            true,
            {
                "ignoreAtRules": [
                    "tailwind",
                    "apply",
                    "responsive",
                    "variants",
                    "screen",
                    "use",
                    "mixin",
                    "include",
                    "function",
                    "if",
                    "return"
                ]
            }
        ]
    }
}