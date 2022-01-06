import React from "react";
import "./Home.css";
import Banner from "./images/banner.png";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={Banner} alt="banner"></img>
        <div className="home__row">
          {/*p1 */}
          <Product />
          {/*p1 */}
          <Product />
        </div>
        <div className="home__row">
          {/*p1 */}
          {/*p1 */}
          {/*p1 */}
        </div>
        <div className="home__row">{/*p1 */}</div>
      </div>
    </div>
  );
}

export default Home;
