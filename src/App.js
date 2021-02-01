import React from 'react'
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.css';
import { get } from './utils/storage';
import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total';
import EmptyTotal from './components/Total/EmptyTotal';

const App = () => {
  const myOrders = get('myOrders');
  const ordersItems = [];
  console.log('myOrders', myOrders);
  return (
    <BrowserRouter>
      <div className='container'>
        <Header ordersItems={ordersItems} />
        <Route exact path='/' render={() => <Content ordersItems={myOrders} />} />
        <Route exact path='/total' render={() => <Total ordersItems={ordersItems} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
