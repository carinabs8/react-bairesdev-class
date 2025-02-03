import './App.css';

import { Articles } from './Components/Articles';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider className="App" store={store}>
      <Articles/>
    </Provider>
  );
}

export default App;
