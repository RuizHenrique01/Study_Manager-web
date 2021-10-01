import createStore from 'redux';

function reducer(state = {token : ''}, action){
    switch (action.type) {
        case 'add_token':
          return { token : state.value }
        default:
          return state
      }
}

const store = createStore(reducer);

export default store;