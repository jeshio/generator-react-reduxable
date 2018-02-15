import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class <%= name %> extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { props, state } = this;
    return (
      <div
        className={classnames(
          '<%= name %>',
        )}
      >
        {/* <%= name %> component content */}
      </div>
    );
  };
}

<%= name %>.propTypes = {};

<%= name %>.defaultProps = {};

export default <%= name %>;
