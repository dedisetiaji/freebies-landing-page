export const state=({
  counter:0
})

export const mutations=
{
  increment(state)
  {
    return state.counter++
  },
  decrement(state)
  {
    return state.counter--
  }
}