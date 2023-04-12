# hillel-front-end-pro

## Task:

Реалізувати рекурсивну функцію, яка зводить число в ступінь.

Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
Ступінь передається як другий аргумент у функціюpow (num, degree).

## Solution:

```js
function power(number, exponent) {
  return (exponent == 0) ? 1 : number * power(number, exponent - 1)
}
```
