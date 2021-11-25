import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
// import Footer from './components/Footer';
// import Landing from '../src/screens/Landing';
import axios from 'axios'

function App() {

  axios.defaults.baseURL = 'http://192.168.100.104:5000/api'
  console.log("🚀 ~ file: App.js ~ line 11 ~ App ~ process.env.REACT_APP_BASE_URL", process.env.REACT_APP_BASE_URL)



  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
