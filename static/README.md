# Роутер для ботов

**Импортирование**

    const { short_json, deshort_json } = requier('short-json'); //es5
or
    import { short_json, deshort_json } from 'short-json'; //es6

*Создание*

**Использование**
   
  **Сжать**

   short_json({
      id: 10,
      text: "string"
    })
<!-- {
  data: {
    1: 10,
    2: "string"
  },
  short_json: {
    id: 1,
    text: 2
  }
} -->

  **Вернуть обратно**

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
<!-- {
      id: 10,
      text: "string"
    } -->