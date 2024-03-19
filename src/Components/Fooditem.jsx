import React from 'react';
import Icon from './Icon';

const Fooditem = ({Coverimg,title,describ,cost}) => {
  return (
    <div>
      <div className='food-div'>
        <div className='foodimg'>
          <img src={Coverimg} className='foodimg1' />
        </div>
        <div className='food-detail'>
          <div className='food-des'>
            <h1>{title}</h1>
            <p>{describ}</p>
          </div>
          <div className='food-cost'>
            <button className='foot-cost-btn'><Icon ok={cost}/></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fooditem