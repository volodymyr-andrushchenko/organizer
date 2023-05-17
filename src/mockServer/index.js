import { createServer, Model } from 'miragejs'

export default () => createServer({
  models: {
    todo: Model,
  },

  seeds(server) {
    server.create('todo', { text: 'Buy milk' })
    server.create('todo', { text: 'Hug mom' })
  },

  routes() {
    this.get('/api/todos', (schema) => {
      return schema.todos.all()
    })

    this.post('/api/todos', (schema, request) => {
      const { text } = JSON.parse(request.requestBody)

      return schema.todos.create({ text })
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
