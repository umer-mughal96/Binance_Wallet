import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
// import Footer from './components/Footer';
// import Landing from '../src/screens/Landing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
