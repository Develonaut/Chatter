import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { getSelectedListType, selectListType, REMAINING, COMPLETED, ARCHIVED } from 'modules/UIModule';
import { getItemCounts } from 'modules/ItemsModule';

import 'stylesheets/components/itemList/ListSelector.scss';

class ListSelector extends React.Component {
  handleOnClick = ({ target: { value } }) => {
    const {
      selectListType: dispatchSelectListType,
    } = this.props;
    dispatchSelectListType(value);
  }

  render() {
    const listTypes = [REMAINING, COMPLETED, ARCHIVED];
    const { counts, selectedListType } = this.props;
    return(
      <nav className="list-selector">
        { listTypes.map(type => {
          const buttonClass = classnames('select', {
            active: type === selectedListType,
          })

          return (
            <button key={type} className={buttonClass} onClick={this.handleOnClick} value={type}>
              <p>{type} ({counts[type]})</p>
            </button>
          );
        }) }
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    counts: getItemCounts(state),
    selectedListType: getSelectedListType(state),
  }
}

const mapDispatchToProps = {
  selectListType,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListSelector);