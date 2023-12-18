import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img 
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="logo" 
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Me</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
};

const RestaurantCard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}>
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bb6049fae59b8a2413a9177eb0338b49" 
        alt="food" 
      />
      <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  )
}


const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  )
};



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
