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
    .then(res => { console.log('likes: ', res)})
    // like in component state
    // this.state = {
    //   likeCounter: 0
    // }
    this.likeAction = this.likeAction.bind(this)
  }

  likeAction() {
    this.props.like(this.props.index)
    .then(response => {
      console.log('response in like inc is: ', response)
    })
    // like in component state
    // this.setState({
    //   likeCounter: this.state.likeCounter + 1
    // })
  }

  likeCounter() {
    if(this.props.likes.length !== 0) {
      let likesCounter = this.props.likes[this.props.index].likes
      return(
        <div>
          {likesCounter}
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }

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

function mapStateToProps(state) {
  console.log('state: ', state);
  return state
}

export default connect(mapStateToProps, { like, getLikes })(Like)
