import React from 'react';
import shortId from 'shortid';
import { connect } from 'react-redux';
import { addItem } from 'modules/ItemsModule';

import IconButton from 'components/shared/IconButton';

import 'stylesheets/components/shared/AddItem.scss';

export class AddItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      text: '',
    };
  }

  resetForm() {
    this.setState({
      name: '',
      text: '',
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { addItem: dispatchAddItem } = this.props;
    const { name = '', text = '' } = this.state;

    if (name) {
      dispatchAddItem(shortId.generate(), name, text);
      this.resetForm();
    }
  }

  handleOnChange = ({ target: { id, value, }}) => {
    this.setState({ [id]: value });
  }

  render() {
    return(
      <form className="add-item" onSubmit={this.handleSubmit}>
        <input 
          type="text"
          id="name"
          className="input name"
          name="name"
          value={this.state.name}
          placeholder="Add Item" maxLength="12"
          onChange={this.handleOnChange}
        />
        <input
          type="text"
          id="text"
          className="input text"
          name="text"
          value={this.state.text}
          placeholder="Any Specific Details?"
          maxLength="25"
          onChange={this.handleOnChange}
        />
        <IconButton onClick={this.handleSubmit} className="icon-plus2 light" />
      </form>
    );
  }
}

const mapDispatchToProps = {
  addItem,
}

export default connect(undefined, mapDispatchToProps)(AddItem);