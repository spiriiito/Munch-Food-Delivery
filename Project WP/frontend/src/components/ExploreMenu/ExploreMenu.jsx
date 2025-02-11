import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({category, setCategory}) => {
  console.log("setCategory in ExploreMenu:", typeof setCategory);

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Explore our diverse menu featuring a variety of dishes, from savory Asian cuisine to classic comfort foods and mouthwatering desserts. There's something to satisfy every craving!</p>
      <div className="explore-menu-list">
      {menu_list.map((item, index) => (
          <div
            key={index}
            className="explore-menu-list-item"
            onClick={() => {
              console.log("Clicked item:", item.menu_name);
              setCategory(prev => (prev === item.menu_name ? "All" : item.menu_name));
            }}
          >
            <img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu;
    