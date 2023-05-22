import { createServer, Model } from 'miragejs'

const MIRAGE_SERVER_LOCAL_STORAGE = 'mirage_server_local_storage'

const saveData = (data) =>
  localStorage.setItem(MIRAGE_SERVER_LOCAL_STORAGE, JSON.stringify(data))

const loadData = () =>
  JSON.parse(localStorage.getItem(MIRAGE_SERVER_LOCAL_STORAGE))

// grid components doesn't appear if it is empty so add smth
const data = loadData()
if (!data) {
  saveData({
    todos: { id: '1', text: 'elemens to keep grid not empty' },
  })
}

export default () => {
  const server = createServer({
    models: {
      todo: Model,
    },

    seeds(server) {
      server.db.loadData(loadData())
    },

    routes() {
      this.get('/api/todos', (schema) => {
        return schema.todos.all()
      })

      this.post('/api/todos', (schema, request) => {
        const { text } = JSON.parse(request.requestBody)

        const output = schema.todos.create({ text })
        const updateTodosBlobForLS = schema.todos
          .all()
          .models.map((item) => item.attrs)

        saveData({
          todos: updateTodosBlobForLS,
        })

        return output
      })

      this.post('/api/inform-mother', () => {
        return 'Mom is proud'
      })

      this.delete('/api/todos/:id', (schema, request) => {
        let id = request.params.id

        return schema.todos.find(id).destroy()
      })
    },
  })

  return server
}
