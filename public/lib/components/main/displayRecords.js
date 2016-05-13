import React from 'react';
import { connect } from 'react-redux';
import { getAllRecords } from '../../actions/RecordActions/index';


class DisplayRecords extends React.Component {
  render() {
    return(
      <div>DisplayRecords</div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, { getAllRecords })(DisplayRecords)
