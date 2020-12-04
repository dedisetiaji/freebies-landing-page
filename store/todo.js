export const state=({
  list:[]
})

export const mutations={
  addTodo(state,todo)
  {
    state.list.push({text:todo,done:false})
  },
  changeTodo(state,todo)
  {
    todo.done=!todo.done
  }
}