import React from 'react';
import { getAllRecords } from '../../actions/RecordActions/index';
import { connect } from 'react-redux';

class InputRecord extends React.Component {
  handleClick() {
    console.log('in handleClick');
    // this.props.getAllRecords()
    // .then(response => {
    //   console.log('response: ', response);
    // })
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

export default connect(null, { getAllRecords })(InputRecord)
