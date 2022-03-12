import { Provider } from 'react-redux';
import store from './redux/store';
import Ussage from "../src/pages/Ussage";


function App() {
  return (
    <Provider store={store}>
    <div>
    <Ussage />
    </div>
    </Provider>
  );
}

export default App;
