import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Gratitude from './components/Cart/Gratitude';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showGratitude, setShowGratitude] = useState(false);

  const isShowGratitude = () => {
    setShowCart(false);
    setShowGratitude(true);
  };
  const isHideGratitude = () => {
    setShowGratitude(false);
  };
  const isShowHandler = () => {
    setShowCart(true);
  };

  const isHideHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showCart && (
        <Cart onClose={isHideHandler} onGratitude={isShowGratitude} />
      )}
      {showGratitude && <Gratitude onClose={isHideGratitude} />}
      <Header onShowCart={isShowHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
