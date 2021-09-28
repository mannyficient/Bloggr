import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../Redux/Actions/Actions";

export class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    return <div>UserHeader</div>;
  }
}

export default connect(null, { fetchUser })(UserHeader);
