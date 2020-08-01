import React from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normalchange',
};

interface ILinkProps {
  page?: string
}

interface ILinkState {
  class: string
}

export default class Link extends React.Component<ILinkProps, ILinkState> {
  constructor(props) {
    super(props);
    this.state = {
      class: STATUS.NORMAL,
    };
  }

  _onMouseEnter = () => {
    this.setState({class: STATUS.HOVERED});
  };

  _onMouseLeave = () => {
    this.setState({class: STATUS.NORMAL});
  };

  render() {
    return (
      <a
        className={this.state.class}
        href={this.props.page || '#'}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        {this.props.children}
      </a>
    );
  }
}