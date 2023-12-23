import React from 'react';

const Menu = ({ menuData }) => {
  return (
    <div className="menu-container">
      {menuData.map((category, index) => (
        <div key={index} className="category-container">
          <h2>{category.category}</h2>
          <img src={category.category_image} alt={category.category} className="category-image" />
          <div className="items-container">
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className="item">
                <h3>{item.name}</h3>
                <img src={item.image} alt={item.name} className="item-image" />
                <p>{item.description}</p>
                <p>{item.price}$</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
