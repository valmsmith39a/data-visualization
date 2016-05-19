import React from 'react';
import { connect } from 'react-redux';

class Like extends React.Component {
  constructor(props) {
    super(props)
    this.likeAction = this.likeAction.bind(this)

  }

  likeAction() {
    console.log('in like action')
  }

  render() {
    return(
      <div>
        <button onClick={this.likeAction}>Like</button>
      </div>
    )
  }
}

export default connect(null, null)(Like)
