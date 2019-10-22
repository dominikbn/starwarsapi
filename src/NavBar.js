import React from 'react';
import NavButton from './NavButton';

function NavBar({ fetchItems }) {
    return (
        <div className='bt bb'>
            <NavButton
                text='Films'
                onClick={() => fetchItems('films', 7)}
            />
            <NavButton
                text='Characters'
                onClick={() => fetchItems('people', 10)}
            />
            <NavButton
                text='Planets'
                onClick={() => fetchItems('planets', 12)}
            />
        </div>
    );
}

export default NavBar;