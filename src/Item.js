import React from 'react';

function Item({ name, text1, text2, text3 }) {
    return (
        <div className='dib tl ba ma2 pa1'>
            <h2 className='tc f3'>{name}</h2>
            <p>{text1}</p>
            <p>{text2}</p>
            <p>{text3}</p>
        </div>
    );
}

export default Item;