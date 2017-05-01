import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Link extends Component {
  show = () => {
    this.context.show(this.props.expound);
  }

  toggle = () => {
    this.context.toggle(this.props.expound);
  }

  render() {
    const dashed = this.context.opened(this.props.expound) && !this.props.collapsible ? 'none' : '1px dashed';
    return (
      <span>
        {' '}
        <span style={{borderBottom: dashed}} onClick={this.props.collapsible ? this.toggle : this.show}>{this.props.children}</span>
        {' '}
      </span>
    );
  }
}

Link.contextTypes = {
  toggle: PropTypes.func,
  show: PropTypes.func,
  opened: PropTypes.func,
};

class ExpoundExtern extends Component {
  render() {
    const display = this.context.opened(this.props.expound) ? 'inline' : 'none'
    return (
      <span style={{display}}>{this.props.children}</span>
    );
  }
}

ExpoundExtern.contextTypes = {
  opened: PropTypes.func
};

export class Expoundable extends Component {
  state = {
    opened: {}
  }

  getChildContext() {
    return {
      opened: this.opened,
      show: this.addOpen,
      toggle: this.toggle
    }
  }

  opened = (link) => this.state.opened[link]

  toggle = (link) => {
    this.setState({
      opened: {
        ...this.state.opened,
        [link]: !this.state.opened[link],
      }
    })
  }

  addOpen = (link) => {
    this.setState({
      opened: {
        ...this.state.opened,
        [link]: true,
      }
    })
  }

  render() {
    return (
      <span>{this.props.children}</span>
    );
  }
}

Expoundable.childContextTypes = {
  show: PropTypes.func,
  toggle: PropTypes.func,
  opened: PropTypes.func,
};

export class ExpoundSelf extends Component {

  state = {
    hidden: true
  }

  toggle = () => {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  show = () => {
    this.setState({
      hidden: false
    })
  }

  render() {
    const display = this.state.hidden ? 'none' : 'inline';
    const dashed = this.state.hidden && !this.props.collapsible ? '1px dashed' : 'none';
    return (
      <span>
        <span style={{borderBottom: dashed}} onClick={this.props.collapsible ? this.toggle : this.show}>
          {this.props.title}
        </span>
        <span style={{display}}>{this.props.children}</span>
      </span>
    );
  }
}

export class Expound extends Component {
  render() {
    if (this.props.title) {
      return <ExpoundSelf {...this.props} />
    } else {
      return <ExpoundExtern {...this.props} />
    }
  }
}