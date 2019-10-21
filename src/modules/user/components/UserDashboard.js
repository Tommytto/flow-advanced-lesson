// @flow
import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getUserList } from '../redux/actions';

class UserDashboard extends Component {
  componentDidMount() {
    this.props.getUserList();
  }

  render() {
    return <div>User dashboard</div>;
  }
}

export default compose(
  connect(
    null,
    { getUserList }
  )
)(UserDashboard);
