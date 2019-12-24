let state;

let button = document.getElementById('button');
let container = document.getElementById('container');

function reducer(state = {count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};
    default:
      return state;
  }
}
function dispatch(action){
  state = reducer(state, action);
  console.log(state)
  render()
}
const render = () =>container.textContent = state.count;

button.addEventListener('click',()=> dispatch({type: 'INCREASE_COUNT'}))

dispatch({type: '@@INIT'})