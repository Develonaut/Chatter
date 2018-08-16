import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { deleteItem, toggleComplete, toggleArchive } from 'modules/ItemsModule';

import 'stylesheets/components/itemList/Item.scss';

export class Item extends React.Component {
  handleDelete = () => {
    const { id, deleteItem: dispatchDeleteItem } = this.props;
    dispatchDeleteItem(id);
  }

  handleComplete = () => {
    const { id, toggleComplete: dispatchToggleComplete } = this.props;
    dispatchToggleComplete(id);
  }

  handleArchive = () => {
    const { id, toggleArchive: dispatchToggleArchive } = this.props;
    dispatchToggleArchive(id);
  }

  render() {
    const {
      name,
      text,
      completed,
      archived,
    } = this.props;

    const completeClass = classnames({
      "icon-checkmark2": !completed,
      "icon-minus2": completed,
    });

    return(
      <li className="list-item">
        <div className="body">
          <span className="name">{name}</span>
          <span className="text">{text}</span>
        </div>
        <button className="icon-cancel" onClick={this.handleDelete}>
          <span>Delete</span>
        </button>
        { !archived && 
          <button className={completeClass} onClick={this.handleComplete}>
           <span>Complete</span>
          </button>
        }
        { completed && 
          <button onClick={this.handleArchive}>Archive</button>
        }
      </li>
    );
  }
}

const mapPropsToDispatch = {
  deleteItem,
  toggleComplete,
  toggleArchive,
}

export default connect(undefined, mapPropsToDispatch)(Item);