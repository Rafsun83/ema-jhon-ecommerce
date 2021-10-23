import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Cart from './componenets/Cart/Cart';
import Header from './componenets/Header/Header';
import Inventory from './componenets/Inventory/Inventory';
import Login from './componenets/Login/Login';
import Register from './componenets/Login/Register';
import Notfound from './componenets/Notfound/Notfound';
import Orderrivew from './componenets/Orderreview/Orderrivew';
import PlaceOrder from './componenets/PlaceOrder/PlaceOrder';
import Privateroute from './componenets/PrivateRoute/Privateroute';
import Shipping from './componenets/Shipping/Shipping';
import Shop from './componenets/Shop/Shop';
import Authprovider from './Context/Authprovider';

function App() {

  return (

    <div>

      <Authprovider>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Privateroute path="/inventory">
              <Inventory></Inventory>
            </Privateroute>
            <Route path="/order">
              <Orderrivew></Orderrivew>
            </Route>
            <Privateroute path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </Privateroute>
            <Privateroute path="/shipping">
              <Shipping></Shipping>
            </Privateroute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="*">
              <Notfound></Notfound>
            </Route>

          </Switch>
        </Router>

      </Authprovider>


    </div>
  );
}

export default App;
