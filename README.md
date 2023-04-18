# hillel-front-end-pro

## Homework №13

### Task:

Напишіть скрипт, який переводить години в секунди і має робити насутпне:

- запитати у користувача кількість годин;
- порахувати, скільки секунд у цій кількості годин;
- записати обчислене значення у змінну;
- вивести цю змінну користувачеві через alert.

### Solution:

```js
  let hours = +prompt('What quantity of hours do you want to translate into seconds?')
  let seconds = hours * 60 * 60;
  alert(`There are ${seconds} second(s) in ${hours} hour(s)`);
```
