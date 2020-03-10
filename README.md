
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

### Заводим в схеме поле findByIds

- Проблема дат в разных форматах
  - ❌ startDate={"start":"2020-03-06T14:47:49.000Z"}
  - ❌ startDate={"start":"2020-03-06T14:47:49Z"}
  - ✅ startDate={"start":"2020-03-06T14:47:49"}
  - ✅ startDate={"start":"2020-03-06"}
  - ❌ createdDate={"start":"2020-03-06"}
  - ✅ createdDate={"start":"2020-03-06T14:47:49Z"}
  - ❌ createdDate={"start":"2020-03-06T14:47:49.000Z"}
  - Не информативные ошибки
    - "errorDescription": "Parameter 'createdDate' value is invalid",
- Проблема с курсорной пагинацией `pageSize=2`, если задан текстовый поиск `title="TaskList"` – не возвращается курсор и кол-во элементов

GraphQL запрос:

```graphql
{
  taskFindMany(
    filter: { title: "TaskList", createdDate: { start: "2020-03-06T14:47:49Z" } },
    limit: 3,
    sort: CREATED_DATE_DESC
  ) {
    id
    createdDate
    title
    sharedIds
    hasAttachments
    authorIds
  }
}
```

трансформируется в

```bash
  axios:request ✅ 200 get /tasks
  axios:request     title="TaskList"
  axios:request     createdDate={"start":"2020-03-06T14:47:49Z"}
  axios:request     limit=3
  axios:request     sortField="CreatedDate"
  axios:request     sortOrder="Desc"
  axios:request     fields="[\"hasAttachments\",\"sharedIds\"]"
```
