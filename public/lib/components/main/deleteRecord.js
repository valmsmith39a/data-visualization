import React from 'react';
import { connect } from 'react-redux';
import { deleteRecord } from '../../actions/recordActions';

class DeleteRecord extends React.Component {
  render() {
    return(
      <div>
        <button>Delete</button>
      </div>
    )
  }
}

export default connect(null, null)(DeleteRecord)
