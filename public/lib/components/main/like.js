import React from 'react';
import { connect } from 'react-redux';
import {
  like,
  getLikes
} from '../../actions/recordActions';

class Like extends React.Component {
  constructor(props) {
    super(props)
    this.props.getLikes()
    .then(res => ())
    // like in component state
    // this.state = {
    //   likeCounter: 0
    // }
    this.likeAction = this.likeAction.bind(this)
  }

  likeAction() {
    console.log('this.props.index: ', this.props.index)
    this.props.like(this.props.index)
    // like in component state
    // this.setState({
    //   likeCounter: this.state.likeCounter + 1
    // })
  }

  likeCounter() {
    return(
      <div>
        {/*this.state.likeCounter*/}
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

export default connect(null, { like, getLikes })(Like)
