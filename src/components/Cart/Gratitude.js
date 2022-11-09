import Modal from '../UI/Modal';
import classes from './Gratitude.module.css';
const Gratitude = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.total}>
        <span>
          Спасибо за то, что уделили время и посмотрели мое приложение, хорошего
          Вам дня! &#128075; &#128578;
        </span>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Закрыть
        </button>
      </div>
    </Modal>
  );
};

export default Gratitude;
