import React from 'react';

import {BrowserRouter as Router,
  Switch,
  Route,
  Link
}from 'react-router-dom';
import Helloworld from './Component/Helloworld'
import CounterExample from './Component/CounterExample'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Products from './Views/Products'
function App() {
  return (
   <div className="relative pb-10 min-h-screen">
     <Router>
     <Header></Header>
     <div className="p-3">
     <Switch>
       <Route exact path="/">
      <Home></Home>
       </Route>
       <Route path="/about">
      <About></About>
       </Route>
       <Route path="/products/:id">
      <Products></Products>
       </Route>
     </Switch>
     </div>
     <Footer></Footer>
     </Router>
     
   </div>
  );
}

export default App;
