import { cocktailLists, mockTailLists } from "../../constants"


const Cocktails = () => {
  return (
    <section id="cocktails" className="noisy">
      <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
      <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />


      <div className="list">

        <div className="popular">
          <h2 >Most popular cocktails</h2>
          <ul className="">
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name} className="cocktail-item">
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>{country} | {detail}</p>
                </div>
                <span>{price}</span>
              </li>
            ))}
          </ul>

        </div>

        <div className="loved">
          <h2 >Most popular cocktails</h2>
          <ul className="">
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name} className="cocktail-item">
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>{country} | {detail}</p>
                </div>
                <span>{price}</span>
              </li>
            ))}
          </ul>

        </div>

      </div>

    </section>
  )
}

export default Cocktails