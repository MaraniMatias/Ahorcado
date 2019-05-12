module.exports = {
  // root: true,
  globals: {
    // e.g "jquery": true,
  },
  rules: {
    "accessor-pairs": "off", // enforce getter and setter pairs in objects
    "array-bracket-spacing": "off", // enforce consistent spacing inside array brackets (fixable)
    "array-callback-return": "off", // enforce 'return` statements in callbacks of array methods
    "arrow-body-style": "off", // require braces around arrow function bodies
    "arrow-parens": "off", // require parentheses around arrow function arguments
    "arrow-spacing": "off", // enforce consistent spacing before and after the arrow in arrow functions (fixable)
    "block-scoped-var": "off", // enforce the use of variables within the scope they are defined
    "block-spacing": "off", // enforce consistent spacing inside single-line blocks (fixable)
    "brace-style": "off", // enforce consistent brace style for blocks
    "callback-return": "off", // require 'return` statements after callbacks
    camelcase: "off", // enforce camelcase naming convention
    "comma-dangle": "error", // require or disallow trailing commas (recommended)
    "comma-spacing": "off", // enforce consistent spacing before and after commas (fixable)
    "comma-style": "off", // enforce consistent comma style
    complexity: ["off", 11], // enforce a maximum cyclomatic complexity allowed in a program
    "computed-property-spacing": "off", // enforce consistent spacing inside computed property brackets (fixable)
    "consistent-return": "off", // require 'return` statements to either always or never specify values
    "consistent-this": "off", // enforce consistent naming when capturing the current execution context
    "constructor-super": "error", // require 'super()` calls in constructors (recommended)
    curly: "off", // enforce consistent brace style for all control statements
    "default-case": "off", // require 'default` cases in `switch` statements
    "dot-location": "off", // enforce consistent newlines before and after dots
    "dot-notation": "off", // enforce dot notation whenever possible
    "eol-last": "off", // enforce at least one newline at the end of files (fixable)
    eqeqeq: "off", // require the use of '===` and `!==`
    "func-names": "off", // enforce named 'function` expressions
    "func-style": "off", // enforce the consistent use of either 'function` declarations or expressions
    "generator-star": "off", // enforce consistent positioning of the '*` in generator functions (replaced by [generator-star-spacing](generator-star-spacing.md))
    "generator-star-spacing": "off", // enforce consistent spacing around '*` operators in generator functions (fixable)
    "global-require": "off", // require 'require()` calls to be placed at top-level module scope
    "global-strict": "off", // require or disallow '"use strict"` in the global scope (replaced by [strict](strict.md))
    "guard-for-in": "off", // require 'for-in` loops to include an `if` statement
    "handle-callback-err": "off", // require error handling in callbacks
    "id-blacklist": "off", // disallow specified identifiers
    "id-length": "off", // enforce minimum and maximum identifier lengths
    "id-match": "off", // require identifiers to match a specified regular expression
    indent: "off", // enforce consistent indentation (fixable)
    "init-declarations": "off", // require or disallow initialization in 'var` declarations
    "jsx-quotes": "off", // enforce the consistent use of either double or single quotes in JSX attributes (fixable)
    "key-spacing": "off", // enforce consistent spacing between keys and values in object literal properties
    "keyword-spacing": "off", // enforce consistent spacing before and after keywords (fixable)
    "linebreak-style": "off", // enforce consistent linebreak style (fixable)
    "lines-around-comment": "off", // require empty lines around comments
    "max-depth": "off", // enforce a maximum depth that blocks can be nested
    "max-len": "off", // enforce a maximum line length
    "max-nested-callbacks": "off", // enforce a maximum depth that callbacks can be nested
    "max-params": "off", // enforce a maximum number of parameters in 'function` definitions
    "max-statements": "off", // enforce a maximum number of statements allowed in 'function` blocks
    "max-statements-per-line": "off", // enforce a maximum number of statements allowed per line
    "new-cap": "off", // require constructor 'function` names to begin with a capital letter
    "newline-after-var": "off", // require or disallow an empty line after 'var` declarations
    "newline-before-return": "off", // require an empty line before 'return` statements
    "newline-per-chained-call": "off", // require a newline after each call in a method chain
    "new-parens": "off", // require parentheses when invoking a constructor with no arguments
    "no-alert": "off", // disallow the use of 'alert`, `confirm`, and `prompt`
    "no-array-constructor": "off", // disallow 'Array` constructors
    "no-arrow-condition": "off", // disallow arrow functions where conditions are expected (replaced by [no-confusing-arrow](no-confusing-arrow.md) and [no-constant-condition](no-constant-condition.md))
    "no-bitwise": "off", // disallow bitwise operators
    "no-caller": "off", // disallow the use of 'arguments.caller` or `arguments.callee`
    "no-case-declarations": "error", // disallow lexical declarations in case clauses (recommended)
    "no-catch-shadow": "off", // disallow 'catch` clause parameters from shadowing variables in the outer scope
    "no-class-assign": "error", // disallow reassigning class members (recommended)
    "no-comma-dangle": "off", // disallow trailing commas in object literals (replaced by [comma-dangle](comma-dangle.md))
    "no-cond-assign": "error", // disallow assignment operators in conditional expressions (recommended)
    "no-confusing-arrow": "off", // disallow arrow functions where they could be confused with comparisons
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-constant-condition": "error", // disallow constant expressions in conditions (recommended)
    "no-const-assign": "error", // disallow reassigning 'const` variables (recommended)
    "no-continue": "off", // disallow 'continue` statements
    "no-control-regex": "error", // disallow control characters in regular expressions (recommended)
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-delete-var": "error", // disallow deleting variables (recommended)
    "no-div-regex": "off", // disallow division operators explicitly at the beginning of regular expressions
    "no-dupe-args": "error", // disallow duplicate arguments in 'function` definitions (recommended)
    "no-dupe-class-members": "error", // disallow duplicate class members (recommended)
    "no-dupe-keys": "error", // disallow duplicate keys in object literals (recommended)
    "no-duplicate-case": "error", // disallow duplicate case labels (recommended)
    "no-duplicate-imports": "off", // disallow duplicate module imports
    "no-else-return": "off", // disallow 'else` blocks after `return` statements in `if` statements
    "no-empty-character-class": "error", // disallow empty character classes in regular expressions (recommended)
    "no-empty-class": "off", // disallow empty character classes in regular expressions (replaced by [no-empty-character-class](no-empty-character-class.md))
    "no-empty": "error", // disallow empty block statements (recommended)
    "no-empty-function": "off", // disallow empty functions
    "no-empty-label": "off", // disallow labels for anything other than loops and switches (replaced by [no-labels](no-labels.md))
    "no-empty-pattern": "error", // disallow empty destructuring patterns (recommended)
    "no-eq-null": "off", // disallow 'null` comparisons without type-checking operators
    "no-eval": "off", // disallow the use of 'eval()`
    "no-ex-assign": "error", // disallow reassigning exceptions in 'catch` clauses (recommended)
    "no-extend-native": "off", // disallow extending native types
    "no-extra-bind": "off", // disallow unnecessary calls to '.bind()`
    "no-extra-boolean-cast": "error", // disallow unnecessary boolean casts (recommended)
    "no-extra-label": "off", // disallow unnecessary labels
    "no-extra-parens": "off", // disallow unnecessary parentheses
    "no-extra-semi": "error", // disallow unnecessary semicolons (recommended) (fixable)
    "no-extra-strict": "off", // disallow '"use strict";` when already in strict mode (replaced by [strict](strict.md))
    "no-fallthrough": "error", // disallow fallthrough of 'case` statements (recommended)
    "no-floating-decimal": "off", // disallow leading or trailing decimal points in numeric literals
    "no-func-assign": "error", // disallow reassigning 'function` declarations (recommended)
    "no-implicit-coercion": "off", // disallow shorthand type conversions
    "no-implicit-globals": "off", // disallow 'var` and named `function` declarations in the global scope
    "no-implied-eval": "off", // disallow the use of 'eval()`-like methods
    "no-inline-comments": "off", // disallow inline comments after code
    "no-inner-declarations": "error", // disallow 'function` or `var` declarations in nested blocks (recommended)
    "no-invalid-regexp": "error", // disallow invalid regular expression strings in 'RegExp` constructors (recommended)
    "no-invalid-this": "off", // disallow 'this` keywords outside of classes or class-like objects
    "no-irregular-whitespace": "error", // disallow irregular whitespace outside of strings and comments (recommended)
    "no-iterator": "off", // disallow the use of the '__iterator__` property
    "no-labels": "off", // disallow labeled statements
    "no-label-var": "off", // disallow labels that share a name with a variable
    "no-lone-blocks": "off", // disallow unnecessary nested blocks
    "no-lonely-if": "off", // disallow 'if` statements as the only statement in `else` blocks
    "no-loop-func": "off", // disallow 'function` declarations and expressions inside loop statements
    "no-magic-numbers": "off", // disallow magic numbers
    "no-mixed-requires": "off", // disallow 'require` calls to be mixed with regular `var` declarations
    "no-mixed-spaces-and-tabs": "error", // disallow mixed spaces and tabs for indentation (recommended)
    "no-multiple-empty-lines": "off", // disallow multiple empty lines
    "no-multi-spaces": "off", // disallow multiple spaces (fixable)
    "no-multi-str": "off", // disallow multiline strings
    "no-native-reassign": "off", // disallow reassigning native objects
    "no-negated-condition": "off", // disallow negated conditions
    "no-negated-in-lhs": "error", // disallow negating the left operand in 'in` expressions (recommended)
    "no-nested-ternary": "off", // disallow nested ternary expressions
    "no-new-func": "off", // disallow 'new` operators with the `Function` object
    "no-new-object": "off", // disallow 'Object` constructors
    "no-new": "off", // disallow 'new` operators outside of assignments or comparisons
    "no-new-require": "off", // disallow 'new` operators with calls to `require`
    "no-new-symbol": "error", // disallow 'new` operators with the `Symbol` object (recommended)
    "no-new-wrappers": "off", // disallow 'new` operators with the `String`, `Number`, and `Boolean` objects
    "no-obj-calls": "error", // disallow calling global object properties as functions (recommended)
    "no-octal": "error", // disallow octal literals (recommended)
    "no-octal-escape": "off", // disallow octal escape sequences in string literals
    "no-param-reassign": "off", // disallow reassigning 'function` parameters
    "no-path-concat": "off", // disallow string concatenation with '__dirname` and `__filename`
    "no-plusplus": "off", // disallow the unary operators '++` and `--`
    "no-process-env": "off", // disallow the use of 'process.env`
    "no-process-exit": "off", // disallow the use of 'process.exit()`
    "no-proto": "off", // disallow the use of the '__proto__` property
    "no-redeclare": "error", // disallow 'var` redeclaration (recommended)
    "no-regex-spaces": "error", // disallow multiple spaces in regular expression literals (recommended)
    "no-reserved-keys": "off", // disallow the use of reserved words as object literal keys (replaced by [quote-props](quote-props.md))
    "no-restricted-globals": "off", // disallow specified global variables
    "no-restricted-imports": "off", // disallow specified modules when loaded by 'import`
    "no-restricted-modules": "off", // disallow specified modules when loaded by 'require`
    "no-restricted-syntax": "off", // disallow specified syntax
    "no-return-assign": "off", // disallow assignment operators in 'return` statements
    "no-script-url": "off", // disallow 'javascript:` urls
    "no-self-assign": "error", // disallow assignments where both sides are exactly the same (recommended)
    "no-self-compare": "off", // disallow comparisons where both sides are exactly the same
    "no-sequences": "off", // disallow comma operators
    "no-shadow": "off", // disallow 'var` declarations from shadowing variables in the outer scope
    "no-shadow-restricted-names": "off", // disallow identifiers from shadowing restricted names
    "no-space-before-semi": "off", // disallow spacing before semicolons (replaced by [semi-spacing](semi-spacing.md))
    "no-spaced-func": "off", // disallow spacing between 'function` identifiers and their applications (fixable)
    "no-sparse-arrays": "error", // disallow sparse arrays (recommended)
    "no-sync": "off", // disallow synchronous methods
    "no-ternary": "off", // disallow ternary operators
    "no-this-before-super": "error", // disallow 'this`/`super` before calling `super()` in constructors (recommended)
    "no-throw-literal": "off", // disallow throwing literals as exceptions
    "no-trailing-spaces": "off", // disallow trailing whitespace at the end of lines (fixable)
    "no-undef": "error", // disallow the use of undeclared variables unless mentioned in 'global` comments (recommended)
    "no-undefined": "off", // disallow the use of 'undefined` as an identifier
    "no-undef-init": "off", // disallow initializing variables to 'undefined`
    "no-underscore-dangle": "off", // disallow dangling underscores in identifiers
    "no-unexpected-multiline": "error", // disallow confusing multiline expressions (recommended)
    "no-unmodified-loop-condition": "off", // disallow unmodified loop conditions
    "no-unneeded-ternary": "off", // disallow ternary operators when simpler alternatives exist
    "no-unreachable": "error", // disallow unreachable code after 'return`, `throw`, `continue`, and `break` statements (recommended)
    "no-unused-expressions": "off", // disallow unused expressions
    "no-unused-labels": "error", // disallow unused labels (recommended)
    "no-unused-vars": "error", // disallow unused variables (recommended)
    "no-use-before-define": "off", // disallow the use of variables before they are defined
    "no-useless-call": "off", // disallow unnecessary calls to '.call()` and `.apply()`
    "no-useless-concat": "off", // disallow unnecessary concatenation of literals or template literals
    "no-useless-constructor": "off", // disallow unnecessary constructors
    "no-useless-escape": "off", // disallow unnecessary escape characters
    "no-var": "off", // require 'let` or `const` instead of `var`
    "no-void": "off", // disallow 'void` operators
    "no-warning-comments": "off", // disallow specified warning terms in comments
    "no-whitespace-before-property": "off", // disallow whitespace before properties
    "no-with": "off", // disallow 'with` statements
    "no-wrap-func": "off", // disallow parentheses around non-IIFE statements (replaced by [no-extra-parens](no-extra-parens.md))
    "object-curly-spacing": ["off", "never"], // enforce consistent spacing inside braces (fixable)
    "object-shorthand": "off", // require or disallow method and property shorthand syntax for object literals
    "one-var-declaration-per-line": "off", // require or disallow newlines around 'var` declarations
    "one-var": "off", // enforce variables to be declared either together or separately in functions
    "operator-assignment": "off", // require or disallow assignment operator shorthand where possible
    "operator-linebreak": "off", // enforce consistent linebreak style for operators
    "padded-blocks": "off", // require or disallow padding within blocks
    "prefer-arrow-callback": "off", // require arrow functions as callbacks
    "prefer-const": "off", // require 'const` declarations for variables that are never reassigned after declared
    "prefer-reflect": "off", // require 'Reflect` methods where applicable
    "prefer-rest-params": "off", // require rest parameters instead of 'arguments`
    "prefer-spread": "off", // require spread operators instead of '.apply()`
    "prefer-template": "off", // require template literals instead of string concatenation
    "quote-props": "off", // require quotes around object literal property names
    quotes: "off", // enforce the consistent use of either backticks, double, or single quotes (fixable)
    radix: "off", // enforce the consistent use of the radix argument when using 'parseInt()`
    "require-jsdoc": "off", // require JSDoc comments
    "require-yield": "off", // require generator functions to contain 'yield`
    semi: "off", // require or disallow semicolons instead of ASI (fixable)
    "semi-spacing": "off", // enforce consistent spacing before and after semicolons (fixable)
    "sort-imports": "off", // enforce sorted import declarations within module
    "sort-vars": "off", // require variables within the same declaration block to be sorted
    "space-after-function-name": "off", // enforce consistent spacing after 'function` names (replaced by [space-before-function-paren](space-before-function-paren.md))
    "space-after-keywords": "off", // enforce consistent spacing after specified keywords (fixable) (replaced by [keyword-spacing](keyword-spacing.md))
    "space-before-blocks": "off", // enforce consistent spacing before blocks (fixable)
    "space-before-function-paren": "off", // enforce consistent spacing before 'function` definition opening parenthesis (fixable)
    "space-before-function-parentheses": "off", // enforce consistent spacing before 'function` parentheses (replaced by [space-before-function-paren](space-before-function-paren.md))
    "space-before-keywords": "off", // enforce consistent spacing before specified keywords (fixable) (replaced by [keyword-spacing](keyword-spacing.md))
    "spaced-comment": "off", // enforce consistent spacing after the '//` or `/*` in a comment (fixable)
    "spaced-line-comment": "off", // enforce consistent spacing after the '//` in line comments (replaced by [spaced-comment](spaced-comment.md))
    "space-in-brackets": "off", // enforce consistent spacing inside brackets (replaced by [object-curly-spacing](object-curly-spacing.md) and [array-bracket-spacing](array-bracket-spacing.md))
    "space-infix-ops": "off", // require spacing around operators (fixable)
    "space-in-parens": "off", // enforce consistent spacing inside parentheses (fixable)
    "space-return-throw-case": "off", // require spacing after 'return`, `throw`, and `case` (fixable) (replaced by [keyword-spacing](keyword-spacing.md))
    "space-unary-ops": "off", // enforce consistent spacing before or after unary operators (fixable)
    "space-unary-word-ops": "off", // enforce consistent spacing before and after unary operators (replaced by [space-unary-ops](space-unary-ops.md))
    strict: "off", // require or disallow strict mode directives
    "template-curly-spacing": "off", // require or disallow spacing around embedded expressions of template strings (fixable)
    "use-isnan": "error", // require calls to 'isNaN()` when checking for `NaN` (recommended)
    "valid-jsdoc": "off", // enforce valid JSDoc comments
    "valid-typeof": "error", // enforce comparing 'typeof` expressions against valid strings (recommended)
    "vars-on-top": "off", // require 'var` declarations be placed at the top of their containing scope
    "wrap-iife": "off", // require parentheses around immediate 'function` invocations
    "wrap-regex": "off", // require parenthesis around regex literals
    "yield-star-spacing": "off", // require or disallow spacing around the '*` in `yield*` expressions (fixable)
    yoda: "off" // require or disallow "Yoda" conditions
  },
  extends: ["prettier", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  env: {
    node: true, // Node.js global variables and Node.js scoping.
    es6: true, // enable all ECMAScript 6 features except for modules.
    mocha: true, // adds all of the Mocha testing global variables.
    jasmine: true, // adds all of the Jasmine testing global variables for version 1.3 and 2.0.
    jest: true, // Jest global variables.
    mongo: true // MongoDB global variables.
  }
};
