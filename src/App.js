import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import Counter from './component/counter/Counter';


const App = () => {
  store.subscribe(() => console.log(store.getState()));
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
};

export default App;