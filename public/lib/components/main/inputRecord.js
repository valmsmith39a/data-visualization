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
      .then(response = {})
    })
  }

  render() {
    return(
      <div>
        <input ref='inputRecord' />
        <button onClick={this.handleClick.bind(this)}>Create</button>
      </div>
    )
  }
}

export default connect(null, { createRecord, createLike })(InputRecord)
