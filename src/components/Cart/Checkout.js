import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();
  const phoneInputRef = useRef();
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    city: true,
    phone: true,
  });

  const isEmpty = (value) => value.trim() === '';
  const phoneLengthCheck = (value) => value.length === 11;

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const streetIsValid = !isEmpty(enteredStreet);
    const cityIsValid = !isEmpty(enteredCity);
    const phoneIsValid = phoneLengthCheck(enteredPhone);

    setFormValidity({
      name: nameIsValid,
      street: streetIsValid,
      city: cityIsValid,
      phone: phoneIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && cityIsValid && phoneIsValid;

    if (!formIsValid) {
      return;
    }
    props.onConfirm();
  };
  const nameClassControl = `${classes.control} ${
    formValidity.name ? '' : classes.invalid
  }`;
  const streetClassControl = `${classes.control} ${
    formValidity.street ? '' : classes.invalid
  }`;
  const cityClassControl = `${classes.control} ${
    formValidity.city ? '' : classes.invalid
  }`;
  const phoneClassControl = `${classes.control} ${
    formValidity.phone ? '' : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClassControl}>
        <label htmlFor='name'>Ваше имя</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formValidity.name && <p>Имя не может быть пустым</p>}
      </div>
      <div className={streetClassControl}>
        <label htmlFor='street'>Адрес</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formValidity.street && <p>Адрес не может быть пустым</p>}
      </div>
      <div className={cityClassControl}>
        <label htmlFor='city'>Город</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formValidity.city && <p>Название города не может быть пустым</p>}
      </div>
      <div className={phoneClassControl}>
        <label htmlFor='phone'>Телефонный номер</label>
        <input type='text' id='phone' ref={phoneInputRef} />
        {!formValidity.phone && (
          <p> Телефонный номер должен состоять из 11 цифр</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onClose}>
          Закрыть
        </button>
        <button className={classes.submit}>Оформить</button>
      </div>
    </form>
  );
};

export default Checkout;
