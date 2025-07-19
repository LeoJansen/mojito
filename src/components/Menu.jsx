import { useState } from "react";
import { allCocktails } from "../../constants"


const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToSlide = (index) =>{
    const newIndex = index;bb

  }


  return (
    <div id="menu" aria-labelledby="menu-heading">
      <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
      <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />

      <h2 id="menu-heading" className="sr-only">Cocktail Menu</h2>
      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;
          return (
            <button id={cocktail.id} 
            className={`${isActive ? "text-white border-white" : "text-white/50 border-white/50"} cocktail-tab`}
            onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          )
        })}
      </nav>
    </div>
  )
}

export default Menu