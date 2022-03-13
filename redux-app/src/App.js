import { Provider } from 'react-redux';
import store from './redux/store';
import Ussage from "../src/pages/Ussage"
import ShoeLabel from './pages/ShoeLabel';
import Label from './pages/Label';
import "../src/styles/App.css";


function App() {
  return (
    <Provider store={store}>
    <div>
    <Ussage />
    </div>
    <ShoeLabel />
    <div class="labelblock">
    <Label />
    </div>
    </Provider>
  );
}

export default App;
