import './App.css';

import ThemeContainer from './Theme';
import { Provider } from "react-redux";
import store from './Redux/store'



function App() {
  return (
    <Provider store={store}>
      <ThemeContainer />
    </Provider>
  );
}

export default App;
