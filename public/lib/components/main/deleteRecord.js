import React from 'react';
import { connect } from 'react-redux';
import { deleteRecord } from '../../actions/recordActions';

class DeleteRecord extends React.Component {
  handleClick(index) {
      this.props.deleteRecord(index)
        .then(response => {});
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick.bind(this, this.props.index)}>Delete</button>
      </div>
    )
  }
}

export default connect(null, { deleteRecord })(DeleteRecord)
