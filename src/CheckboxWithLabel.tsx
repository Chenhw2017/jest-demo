import React from 'react';

interface ILinkProps {
  labelOn: string,
  labelOff: string
}

interface ILinkState {
  isChecked: boolean
}

export default class CheckboxWithLabel extends React.Component <ILinkProps, ILinkState> {
  state = {
    isChecked: false,
  };

  onChange = () => {
    this.setState({isChecked: !this.state.isChecked});
  };

  render() {
    return (
      <label>
        <input
          data="3423423"
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
}