import React from 'react';
import Fooditem from './Fooditem.jsx';
import eggs from '../Assests/boiled_eggs.png';
import ramen from '../Assests/ramen.png';
import burger from '../Assests/burger.png';
import pancake from '../Assests/pancake.png';
import grilled from '../Assests/grilled_chicken.png';
import cake from '../Assests/cake.png';

const Home = () => {
  return (
    <main>
        <div className='home-div'>
          <div className="food-item-fx">
            <Fooditem 
            Coverimg ={eggs}
            title='Boiled Eggs'
            describ='Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.'
            cost='$10.00'
            />
          </div>
          <div className="food-item-fx">
            <Fooditem 
            Coverimg ={ramen}
            title='RAMEN'
            describ='Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.'
            cost='$25.00'
            />
          </div>
          <div className="food-item-fx">
            <Fooditem 
            Coverimg ={grilled}
            title='GRILLED CHICKEN'
            describ='Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.'
            cost='$45.00'
            />
          </div>
          <div className="food-item-fx">
            <Fooditem 
            Coverimg ={cake}
            title='CAKE'
            describ='Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.'
            cost='$18.00'
            />
          </div>
          <div className="food-item-fx">
            <Fooditem 
            Coverimg ={burger}
            title='BURKER'
            describ='Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.'
            cost='$23.00'
            />
          </div>
          <div className="food-item-fx">
            <Fooditem 
            Coverimg ={pancake}
            title='PANCAKE'
            describ='Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.'
            cost='$25.00'
            />
          </div>
        </div>
    </main>
  )
}

export default Home;