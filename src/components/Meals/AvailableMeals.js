import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Суши',
    description: 'Свежая рыба для гурманов',
    price: 899,
  },
  {
    id: 'm2',
    name: 'Шницель',
    description: 'Прямиком из Германии!',
    price: 462,
  },
  {
    id: 'm3',
    name: 'Бургер барбекью',
    description: 'Американский стиль, неописуемый восторг',
    price: 378,
  },
  {
    id: 'm4',
    name: 'Боул с овощами',
    description: 'Полезный...и зелёный...',
    price: 299,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
