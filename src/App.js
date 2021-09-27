import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
// import Footer from './components/Footer';
// import Landing from '../src/screens/Landing';
import axios from 'axios'

function App() {

    axios.defaults.withCredentials = true



  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
