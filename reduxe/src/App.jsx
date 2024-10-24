import './App.css';
import Reduxtodo from './Components/Reduxtodo';
import { Provider } from 'react-redux';
import store from './App.js'; 

function App() {
  return (
    <Provider store={store}> 
      <div className="App">
        <Reduxtodo />
      </div>
    </Provider>
  );
}

export default App;
