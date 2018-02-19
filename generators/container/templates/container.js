import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import classnames from 'classnames';
import * as Components from "<%= componentsPath %>";

class <%= name %> extends Component {
  render() {
    return (
      <div className={classnames('<%= name %>')}>
        {/* Dumb components */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
  <%= name %>
);
