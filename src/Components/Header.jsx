import React from 'react';
import Icon from './Icon';

const Header = () => {
  return (
    <nav className='home-nav'>
        <div className='main-div'>
            <div className='submain-div'>
                <h1 className='nav-heading'>F<span className='redcol'>o</span>rF<span className='redcol'>oo</span>d</h1>
                <input className='input-search' placeholder='Search Food....'/>
            </div>
            <div className='headicon'>
                <Icon ok='All'/>
                <Icon ok='Breakfast'/>
                <Icon ok='Lunch'/>
                <Icon ok='Dinner'/>
            </div>
        </div>
    </nav>
  )
}

export default Header;