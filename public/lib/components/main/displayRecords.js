import React from 'react';
import { connect } from 'react-redux';
import { getAllRecords } from '../../actions/recordActions';
import Record from './record';
import Like from './like';

class DisplayRecords extends React.Component {
  constructor(props) {
    super(props)
    this.props.getAllRecords()
    .then(response => {})
  }

  renderRecords() {
    return this.props.records.map((record, index) => (
      <div>
        <Record key={index} record={record} index={index} />
        <Like index={index} />
      </div>
    ))
  }

  render() {
    return(
      <div>
        <ul>
          {this.renderRecords()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { getAllRecords })(DisplayRecords)
