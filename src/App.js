import React from 'react';
import Counter from './components/counter'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const initialState= {
  count:0
}
function Reducer (state=initialState,action){
switch(action.type){
  case "INCREMENT":
    return{
      count:state.count +1
    };
    case "DECREMENT":
      return{
        count:state.count -1
      };
    default:
      return state;
}
}
function App() {
  const store = createStore(Reducer)
  store.dispatch({type:"INCREMENT"})
  store.dispatch({type:"DECREMENT"})

  return (
    <Provider store={store}>
  <Counter />
      
    </Provider>
  );
}

export default App;
