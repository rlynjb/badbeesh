import React, { useState } from 'react';

const store = [];

const FOOD = {
  id: new Date().now,
  timestamp: new Date().now,
  name: '',
  calories: '',
}

export const Food = () => {
  const [value, setValue] = useState({
    name: ''
  });

  const handleNameChange = (event) => {
    event.persist();
    setValue((value) => {
      return {
        ...value,
        name: event.target.value
      }
    });
  }

  return (
    <div>
      <div className="tile--food-calories">
        <h3>Food Calories</h3>

        <div className="block--history">
          <h6>history</h6>
          <ul>
            <li><span>00/00/00 - 00:00am:</span> name of food - calories</li>
          </ul>
        </div>

        <div className="block--tracker">
          <h6>daily tracker</h6>
          <ul>
            <li>
              <input type="text" placeholder="Food name"
                value={value.name}
                onChange={handleNameChange}
              />
              <input type="text" placeholder="Calories" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}