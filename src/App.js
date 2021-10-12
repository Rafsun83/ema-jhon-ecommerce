import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Cart from './componenets/Cart/Cart';
import Header from './componenets/Header/Header';
import Inventory from './componenets/Inventory/Inventory';
import Notfound from './componenets/Notfound/Notfound';
import Orderrivew from './componenets/Orderreview/Orderrivew';
import PlaceOrder from './componenets/PlaceOrder/PlaceOrder';
import Shop from './componenets/Shop/Shop';

function App() {

  return (

    <div>
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/order">
            <Orderrivew></Orderrivew>
          </Route>
          <Route path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>

        </Switch>
      </Router>




    </div>
  );
}

export default App;
