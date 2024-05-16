import { useEffect, useState } from "react";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  const recipesFetch = async () => {
    const response = await fetch("https://dummyjson.com/recipes?limit=100");
    const product = await response.json();
    return product.recipes;
  };

  useEffect(() => {
    const loadRecipes = async () => {
      const recipesPro = await recipesFetch();
      setRecipes(recipesPro);
    };
    loadRecipes();
  }, []);
  const scroll = (direction) => {
    const container = document.querySelector('.carousel-inner');
    const scrollAmount = container.clientWidth; 
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right') {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  return (
    <>
      <div className="banner">
      <div className="containers fsrink">
        <div className="bannerTitle">
          <h3 className="smtitle">Şefin Tabakları</h3>
          <div className="carousel">
            <button className="nav left-nav" onClick={() => scroll('left')}>&#9664;</button>
            <div className="carousel-inner">
              {recipes.slice(0, 5).map((food) => (
                <div className="recipies-box" key={food.id}>
                  <img src={food.image} alt={food.title} />
                </div>
              ))}
            </div>
            <button className="nav right-nav" onClick={() => scroll('right')}>&#9654;</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
