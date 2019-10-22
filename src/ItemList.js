import React from 'react';
import Item from './Item';

function ItemList({ items, itemType }) {
    let content = [];

    switch (itemType) {
        case 'people':
            content = items.map(item => {
                return <Item
                    key={item.url}
                    name={item.name}
                    text1={'Gender: ' + item.gender}
                    text2={'Mass: ' + item.mass}
                    text3={'Skin Color: ' + item.skin_color}
                />
            });
            break;
        case 'planets':
            content = items.map(item => {
                return <Item
                    key={item.url}
                    name={item.name}
                    text1={'Terrain: ' + item.terrain}
                    text2={'Climate: ' + item.climate}
                    text3={'Population: ' + item.population}
                />
            });
            break;
        case 'films':
            items.sort((a, b) => a.episode_id - b.episode_id);
            content = items.map(item => {
                return <Item
                    key={item.url}
                    name={item.title}
                    text1={'Episode: ' + item.episode_id}
                    text2={'Release Date: ' + item.release_date}
                    text3={'Director: ' + item.director}
                />
            });
            break;
        default:
            content = <p>Click a button to show content!</p>;
    }

    return (
        <div>
            {content}
        </div>
    );
}

export default ItemList;