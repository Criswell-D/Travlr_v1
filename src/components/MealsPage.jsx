import { Link } from 'react-router-dom';

export default function MealsPage() {
  const meals = [
    {
      title: 'SeaFood Special',
      img: 'seafoods.jpg',
      subtitle: 'Fried Salmon Special',
      description:
        "I'm a product overview. Here you can write more information about your product. Buyers like to know ...",
    },
    {
      title: 'Sumptuous Desserts',
      img: 'desserts.jpg',
      subtitle: 'Choco Ice Cream Sandwich',
      description:
        "I'm a product overview. Here you can write more information about your product. Buyers like to know ...",
    },
    {
      title: 'Buffet',
      img: 'buffet.jpg',
      subtitle: 'Mixed Buffet',
      description:
        "I'm a product overview. Here you can write more information about your product. Buyers like to know ...",
    },
  ];

  return (
    <div className="page meals">
      <h2>Meals</h2>
      <div className="box">
        <div className="body">
          <ul id="meals">
            {meals.map(meal => (
              <li key={meal.title}>
                <h2>
                  <Link to="/meals">{meal.title}</Link>
                </h2>
                <div className="infos">
                  <Link to="/meals">
                    <img
                      src={`/images/${meal.img}`}
                      alt={meal.title}
                      height="169"
                      width="780"
                    />
                    <span className="cover" />
                  </Link>
                  <p>
                    <span>{meal.subtitle}</span> {meal.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}