# Conditional Logic Quiz

1. What is a "conditional statement" used for in JavaScript?
   conditional statements help your code make decisions and be more dynamic
2. What 2 parts are an `if` statement made up of? List and describe both.
   there is the condition which determines if a statement is true or false
   there is the code which is only executed if the condition is true
3. What is the purpose of an `else` clause in an `if` statement?
   and else clause ensures that some code is executed even if none of the conditions are true
4. Which built-in function should we use to get input from the user?
   prompt()
5. Which operator is the logical `and` operator and what purpose does it serve?
   && used to check if more than one condition is true. if any of the conditions are false then it returns false
6. Which operator is the logical `or` operator and what purpose does it serve?
   || used to check if multiple conditions are true and returns true if even one of them is true

#### Truth Table Exercise

Fill in the missing values in this truth table by typing the expected boolean value to the corresponding number below:

> **Note:** Operations in parentheses have priority, so they should be evaluated first, and then the final result should come from combining the inner results.

| p       | q       | !p      | p OR q | p AND q | (!p) OR (p AND q) |
| ------- | ------- | ------- | ------ | ------- | ----------------- |
| `true`  | `true`  | **1**   | `true` | `true`  | **5**             |
| `true`  | `false` | `false` | **2**  | `false` | **6**             |
| `false` | `true`  | `true`  | `true` | **4**   | **7**             |
| `false` | `false` | `true`  | **3**  | `false` | **8**             |

Fill in the boolean values below.

1. When `p = true` and `q = true`, `!p` should be: false

2. When `p = true` and `q = false`, `p OR q` should be: true

3. When `p = false` and `q = false`, `p OR q` should be: false

4. When `p = false` and `q = true`, `p AND q` should be: false

5. When `p = true` and `q = true`, `(!p) OR (p AND q)` should be: true

6. When `p = true` and `q = false`, `(!p) OR (p AND q)` should be: false

7. When `p = false` and `q = true`, `(!p) OR (p AND q)` should be: true

8. When `p = false` and `q = false`, `(!p) OR (p AND q)` should be: true
