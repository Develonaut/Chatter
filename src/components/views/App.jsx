import React from 'react';

import Header from 'components/shared/Header';
import Footer from 'components/shared/Footer';

import AddTask from 'components/shared/AddItem';

import ListSelector from 'components/itemList/ListSelector';
import ItemList from 'components/itemList/ItemList';

import 'stylesheets/components/views/App.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header >
          <AddTask />
        </Header>
        <main>
          <ListSelector />
          <ItemList />
        </main>
        <Footer />
      </div>
    );
  }
}
