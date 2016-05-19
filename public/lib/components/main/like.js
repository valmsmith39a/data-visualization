import React from 'react';
import { connect } from 'react-redux';

class Like extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likeCounter: 0
    }
    this.likeAction = this.likeAction.bind(this)
  }

  likeAction() {
    this.setState({
      likeCounter: this.state.likeCounter + 1
    })
  }

  likeCounter() {
    return(
      <div>
        {this.state.likeCounter}
      </div>
    )
  }

  render() {
    return(
      <div>
        <button onClick={this.likeAction}>Like</button>
        {this.likeCounter()}
      </div>
    )
  }
}

export default connect(null, null)(Like)
