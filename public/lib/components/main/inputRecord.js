import React from 'react';
import { connect } from 'react-redux';
import {
  createRecord,
  createLike
} from '../../actions/recordActions';

class InputRecord extends React.Component {
  handleClick() {
    this.props.createRecord({record:this.refs.inputRecord.value, checkbox: false})
    .then(response => {
      this.props.createLike({likes: 0})
      .then(response => { console.log('response in create like: ', response)})
    })
  }

  render() {
    return(
      <div id='input-record-wrapper'>
        <h3>Daily Distance</h3>
        <input className='input-record' id='input-record' ref='inputRecord' />
        <button classname='btn btn-default' onClick={this.handleClick.bind(this)}>Post</button>
      </div>
    )
  }
}

export default connect(null, { createRecord, createLike })(InputRecord)
