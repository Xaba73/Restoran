import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartitems = (
    <ul className={classes['cart-items']}>
      {[
        {
          id: 'c1',
          name: 'Sushi',
          amount: 2,
          price: 22.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartitems}
      <div className={classes.total}>
        <span> Totoal amount</span>
        <span> 35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Закрыть</button>
        <button className={classes.button}>Оформить</button>
      </div>
    </Modal>
  );
};

export default Cart;
