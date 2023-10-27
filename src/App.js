import Navigation from './component/Home/Navigation/Navigation'
import FrontImage from './component/Home/frontImage/FrontImage';
import Model from './component/Home/suggestions/model';
import Product from './component/Home/suggestions/product';
import './App.css';
function App() {
  return (
    <div className="App">
      <div className="container">
        <Navigation/>
      </div>
        <FrontImage/>
        <Product/>
        {/* <Model/> */}
    </div>
  );
}

export default App;
