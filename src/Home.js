import React from "react";
import "./Home.css";
import Banner from "./images/banner.png";
import Product from "./Product";
import P1 from "./images/Ajrakh short top.jpg";
import P2 from "./images/BambooBag.jpg";
import P3 from "./images/Blue pottery hanger.jpg";
import P4 from "./images/cup coaster set.jpg";
import P5 from "./images/dupatta.jpg";
import P6 from "./images/Gajjisilk.jpg";
import P7 from "./images/clutch.jpg";
import P8 from "./images/jaipuri bedsheet.jpg";
import P9 from "./images/Organic dinner set.jpg";
import P10 from "./images/vase.jpg";
import P11 from "./images/traditional laptop bag.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={Banner} alt="banner"></img>
        <div className="home__row">
        <Product
            id="118"
            title="Block print Jaipuri Bedsheet"
            price={1199}
            image={P8}
            rating={4}
          />
          <Product
            id="119"
            title="Organic Bamboo Dinner Set"
            price={1499}
            image={P9}
            rating={5}
          />
          <Product
            id="120"
            title="Hand Painted Flower Vase"
            price={899}
            image={P10}
            rating={5}
          />
          <Product
            id="121"
            title="Traditional Laptop Bag"
            price={799}
            image={P11}
            rating={5}
          />
          
        </div>
        <div className="home__row">
          <Product
            id="115"
            title="Pure Gajji Silk Duppatta "
            price={4999}
            image={P5}
            rating={5}
          />
          <Product
            id="114"
            title="Traditional Cup-Coaster Set"
            price={499}
            image={P4}
            rating={5}
          />
          
          <Product
            id="111"
            title="Women's Ajrakh Western Top"
            price={599}
            image={P1}
            rating={5}
          />
          
        </div>
        <div className="home__row">
        <Product
            id="112"
            title="Orignal Bamboo Carry Bag"
            price={299}
            image={P2}
            rating={4}
          />
          <Product
            id="117"
            title="Handcrafted Bead Clutch"
            price={599}
            image={P7}
            rating={4}
          />
          
          <Product
            id="113"
            title="Handmade Multi-purpose Hanger "
            price={249}
            image={P3}
            rating={4}
          />
          <Product
            id="116"
            title="Green Gajji Silk Saree"
            price={9999}
            image={P6}
            rating={3}
          />
          
        </div>
      </div>
    </div>
  );
}

export default Home;
