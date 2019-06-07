let state
const button = document.getElementById('button')

const reducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};
    default:
      return state;
  }

}

const render = () => {
  let container = document.getElementById('container')
  container.textContent = state.count
}

const dispatch = action => {
  state = reducer(state,action)
  render()
}

button.addEventListener('click', () => {
  dispatch({type: 'INCREASE_COUNT'})
})

dispatch({type: '@@INIT'})
