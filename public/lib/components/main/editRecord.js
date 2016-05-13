import React from 'react';
import { connect } from 'react-redux';
import { editRecord } from '../../actions/recordActions';

class EditRecord extends React.Component {

  render() {
    return(
      <button>Edit</button>
    )
  }
}

export default connect(null, { editRecord })(EditRecord);
