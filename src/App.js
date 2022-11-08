import React, { Fragment, useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';



function App() {
 const [showCart, setShowCart] = useState(false);

 const isShowHandler = () => {
  setShowCart(true);
 }

 const isHideHandler = () => {
  setShowCart(false);
 }

  return (
    <CartProvider>
      {showCart && <Cart onClose = {isHideHandler}/>}
      <Header onShowCart={isShowHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
