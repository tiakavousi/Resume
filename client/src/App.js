import './App.css';
import Home from './portfolioContainer/home/Home';
import PortfolioContainer from './portfolioContainer/PortfolioContainer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
    <ToastContainer />
      <PortfolioContainer/>
    </div>
  );
}

export default App;
