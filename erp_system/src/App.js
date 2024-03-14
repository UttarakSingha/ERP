import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductsManagement from './components/ProductsManagement';
import OrdersManagement from './components/OrdersManagement';
import OrdersCalendarView from './components/OrdersCalendarView'; // Optional

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/products" component={ProductsManagement} />
          <Route path="/orders" component={OrdersManagement} />
          <Route path="/calendar" component={OrdersCalendarView} /> {/* Optional */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
