import React from 'react';
import { connect } from 'react-redux';
import { createRecord } from '../../actions/recordActions';

class InputRecord extends React.Component {
  handleClick() {
    this.props.createRecord({record:this.refs.inputRecord.value})
    .then(response => {
      console.log('response: ', response);
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

export default connect(null, { createRecord })(InputRecord)
