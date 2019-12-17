module.exports = {
  extends: [
    'stylelint-config-standard'
  ],
  rules: {
    "no-empty-source": null,
    "number-leading-zero": null,
    "no-descending-specificity": null,
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "extend",
          "at-root",
          "debug",
          "warn",
          "error",
          "if",
          "else",
          "for",
          "each",
          "while",
          "mixin",
          "include",
          "content",
          "return",
          "function"
        ]
      }
    ]
  }
}
