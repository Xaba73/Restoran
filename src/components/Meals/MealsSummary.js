import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Вкусные блюда, доставляем для вас</h2>
      <p>
        Выберите свое любимое блюдо из нашего широкого меню и наслаждайтесь
        вкусным обедом или ужином дома.
      </p>
      <p>
        Все наши блюда готовятся из высококачественных ингредиентов, точно в
        срок и конечно же опытными поварами!
      </p>
    </section>
  );
};

export default MealsSummary;
