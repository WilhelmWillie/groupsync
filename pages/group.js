import React, { Component } from 'react'

class GroupPage extends Component {
  render() {
    return (
      <div>
        <h1>Group ID: {this.props.url.query.id}</h1>
      </div>
    );
  }
}

export default GroupPage
