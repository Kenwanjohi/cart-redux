import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Store from './store'
import { CART_ADD } from './constants/actionTypes'
import { ITEM_REMOVE } from './constants/actionTypes'
import * as serviceWorker from './serviceWorker';

function render() {
ReactDOM.render(
  <React.StrictMode>
    <App
     products={Store.getState().productsState} 
     cartItems={Store.getState().cartState} 
     onDelete = {(id) => Store.dispatch({type: ITEM_REMOVE, id})}
     onAddToCart={
       (id, product, newprice, price, quantity) => 
       Store.dispatch({type: CART_ADD, product:{id, product, newprice, price, quantity}})
       }/>
  </React.StrictMode>,
  document.getElementById('root')
);
}
Store.subscribe(render);
render();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
