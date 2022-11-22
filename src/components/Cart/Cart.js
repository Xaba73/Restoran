import { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';
import React from 'react';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [didSubmit, setDidsubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalAmount = `${cartCtx.totalAmount} ₽`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const checkOutHandler = () => {
    setIsCheckout(true);
  };
  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      'https://restikdb-default-rtdb.europe-west1.firebasedatabase.app/Orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidsubmit(true);
    cartCtx.clearCart();
  };
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalAction = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Закрыть
      </button>
      {hasItems && (
        <button className={classes.button} onClick={checkOutHandler}>
          Оформить
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Полная стоимость </span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onClose={props.onClose} />
      )}
      {!isCheckout && modalAction}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Отправляем ваш заказ на кухню...</p>;
  const didSubmitModalContent = (
    <React.Fragment>
      <p>
        Ваш заказ успешно оформлен! Ожидайте, в скором времени курьер будет у
        вас. Спасибо за заказ! &#128521;
      </p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Закрыть
        </button>
      </div>
    </React.Fragment>
  );
  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
