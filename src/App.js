import React from 'react';
import NavBar from './NavBar';
import ItemList from './ItemList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      itemType: ''
    }
  }

  fetchItems = async (itemType, amount) => {
    let urls = [];
    for (let i = 0; i < amount; i++) {
      urls.push('https://swapi.co/api/' + itemType + '/' + (i+1) + '/');
    }

    try {
      const items = await Promise.all(urls.map(async url => {
        const response = await fetch(url);
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed! HTTP status code is not 2xx.');
      }));
      this.setState({ items });
      this.setState({ itemType });
      console.log('items:', this.state.items);

    } catch(error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className='tc georgia f5'>
        <header>
          <h1 className='f2'>Infos about Star Wars</h1>
        </header>
        <NavBar fetchItems={this.fetchItems} />
        <ItemList items={this.state.items} itemType={this.state.itemType} />
      </div>
    );
  }
}

export default App;
