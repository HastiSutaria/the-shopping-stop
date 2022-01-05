import React from "react";
import "./Header.css";
import logo from "./images/The.png"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingCart';
function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src = {logo}
      />
      {/*https://pngimg.com/uploads/amazon/amazon_PNG25.png */}
      <div className="header__search">
        <input className="header__searchinput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
          <div className="header__option">
            <span className="header__optionLineOne">Hello User</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          

          </div>
          <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Favourites</span>
          </div>
          <div className="header__basketoption">
             <ShoppingBasketIcon /> 
             <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
      </div>
    </div>
  );
}

export default Header;
