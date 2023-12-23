// App.js

import React from 'react';
import './App.css'; // CSS dosyanızın yolu
import burger from '../src/json/burger.jpg';
import drinks from '../src/json/drinks.jpg';
import kahve from '../src/json/kahve.jpg';
import pizza from '../src/json/pizza.jpg';
import happy from '../src/json/happy.png';


const App = () => {
  const data = [
    { category: 'Burgerler', image: burger, englishCategory: 'Burgers' },
    { category: 'Soğuk içecekler', image: drinks, englishCategory: 'Cold Drinks' },
    { category: 'Kahveler', image: kahve, englishCategory: 'Coffees' },
    { category: 'Pizzalar', image: pizza, englishCategory: 'Pizzas' },
  ];

  return (
    <div className="container">
      <div style={{ width:'100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img style={{height:300}} src={happy} alt="Logo" />
      </div>
        {data.map((item, index) => (
        <div
          key={index}
          className="box"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            position: 'relative',
          }}
        >
          <div style={{ background: 'rgba(0, 0, 0, 0.5)', marginLeft: 70, marginRight: 70, borderRadius: 20 }}>
            <h2
              style={{
                left: 0,
                right: 0,
                textAlign: 'center',
                margin: 0,
                marginTop: 70,
                color: 'white',
              }}
            >
              {item.category}
            </h2>
            <hr style={{ width: '50%', margin: '10px auto', border: '1px solid white' }} />
            <h4
              style={{
                left: 0,
                right: 0,
                textAlign: 'center',
                margin: 0,
                color: 'white',
              }}
            >
              {item.englishCategory}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
