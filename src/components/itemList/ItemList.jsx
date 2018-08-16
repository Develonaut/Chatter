import React from 'react';
import { connect } from 'react-redux';
import { getItems } from 'modules/ItemsModule';

import 'stylesheets/components/itemList/ItemList.scss'

import Item from 'components/itemList/Item';

export class ItemList extends React.Component {
  render() {
    const { items } = this.props;

    return(
        <ul className="item-list">
          { !items.length && <p>No Items</p> }
          { 
            items.map((item, idx) => {
              return <Item key={`${item.name}${idx}`} {...item} index={idx} />;
            })
          }
        </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: getItems(state),
  }
}

export default connect(mapStateToProps)(ItemList);