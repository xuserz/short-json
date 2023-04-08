# Роутер для ботов

**Импортирование**
```js
const { short_json, deshort_json } = requier('short-json'); //es5
  or
import { short_json, deshort_json } from 'short-json'; //es6
```
**Использование**
<<<<<<< HEAD
*Сжать*
```js
=======
   
  **Сжать**
```
>>>>>>> d58859ab5bcfb3ad17d1e3c547a73819d3a8b1b4
short_json({
  id: 10,
  text: "string"
})
return {
  data: {
    1: 10,
    2: "string"
  },
  short_json: {
    id: 1,
    text: 2
  }
}
```
<<<<<<< HEAD
 *Вернуть обратно*
```js
=======
  **Вернуть обратно**
```
>>>>>>> d58859ab5bcfb3ad17d1e3c547a73819d3a8b1b4
deshort_json({
  data: {
    1: 10,
    2: "string"
  },
  short_json: {
    id: 1,
    text: 2
  }
})
return {
  {
    id: 10,
    text: "string"
  }
}
```
<<<<<<< HEAD
**Тесты**
*Оригинальный вес файла: 32,4 КБ*
| Framework          | Version                    |(short) ops/sec|(deshort) ops/sec| size          |
| :----------------- | :------------------------- | ------------: | ------------:   | ------------: |
| compress-json      | 2.1.2                      | 919,286       | 26,018          |       20,6 КБ |
| **short-json**     | **1.0.0-beta**             | **11,218,886**|**21,334,942**   |       20,4 КБ |
| -                  |                            |               |                 |               |
| json               | -	                        |  -            | -               |               |
=======
>>>>>>> d58859ab5bcfb3ad17d1e3c547a73819d3a8b1b4
