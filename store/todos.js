export const state = () => ({
  list: [],
  counter:0
})

export const mutations = {
  increment(state)
  {
    state.counter++
  },
  add (state, text) {
    state.list.push({
      text,
      done: false,
      id: Date.now()
    })
  },
  remove (state, todo) {
    state.list = state.list.filter(item => item.id !== todo.id)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}