import { createServer, Model } from 'miragejs'
import { produce } from 'immer'

const MIRAGE_SERVER_LOCAL_STORAGE = 'mirage_server_local_storage'

const saveData = (data) =>
  localStorage.setItem(MIRAGE_SERVER_LOCAL_STORAGE, JSON.stringify(data))

// update callback gets state variable
const updateData = (updateCallback) => {
  const state = loadData()

  const newState = produce(state, updateCallback)

  saveData(newState)
}

const loadData = () =>
  JSON.parse(localStorage.getItem(MIRAGE_SERVER_LOCAL_STORAGE))

const serializeModelItems = (items) =>
  items.all().models.map((item) => item.attrs)

// initial structure
const data = loadData()

if (!data) {
  saveData({
    todos: [],
    layouts: [],
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

      this.get('/api/layouts', () => {
        const { layouts } = loadData()
        return { layouts }
      })

      this.post('/api/todos', (schema, request) => {
        const { text, id } = JSON.parse(request.requestBody)

        const output = schema.todos.create({ text, id })

        updateData((state) => {
          state.todos = serializeModelItems(schema.todos)
        })

        return output
      })

      this.post('/api/layouts', (schema, request) => {
        const layouts = JSON.parse(request.requestBody)
        console.log(layouts)

        updateData((state) => {
          state.layouts = layouts
        })

        return layouts
      })

      this.delete('/api/todos/:id', (schema, request) => {
        let id = request.params.id

        return schema.todos.find(id).destroy()
      })
    },
  })

  return server
}
