
## Подключаемся к АПИ

- `yarn add axios debug`
- Настраиваем axios
  - Настраиваем дебаггинг
- пишем первый примитивный тест

## Поднимаем простой graphql-сервер

- `yarn add graphql apollo-server ts-node-dev`
- добавляем dev-скрипт `DEBUG=axios:request ts-node-dev --no-notify --respawn --watch src/schema src/server.ts`
- поднимаем болванку схемы `yarn add graphql-compose graphql-compose-modules`

## Заводим Tasks

Документация АПИ метода <https://developers.wrike.com/documentation/api/methods/query-tasks>

### Создаем findMany.ts

- Проблемы апи
  - Микс из полей (фильтр, сортировка, проекция, поиск по subTasks)
  - Тяжело подобрать формат
    - например `fields` надо передавать как `['name1', 'name2']`
    - `effortAllocation`, `billingType` в проекции работают только для каких-то платных аккаунтов
    - `recurrent` вообще не возвращает данные
  - Есть `limit`, но нет `offset`
    - можно использовать курсор `nextPageToken`, только он протухает через час-два (и опять запрашивать все данные сначала)
- Пишем примитивный тест

### Создаем findByIds.ts

- Возвращаются все поля
- Можно запросить до 100 записей
- Пишем примитивный тест

### Создаем TaskTC.ts

- Создаем TaskTC.ts
  - `yarn add graphql-compose-json`
- Добавляем в схему поле `taskByIds.ts`
- Добавляем в схему поле `taskFindMany.ts`
