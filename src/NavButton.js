import React from 'react';

function NavButton({ text, onClick }) {
    return (
        <button 
            className='dim ph3 pv2 mh1 mv2 bn white bg-black'
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default NavButton;