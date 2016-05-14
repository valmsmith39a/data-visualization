import React from 'react';
import { connect } from 'react-redux';
import { getAllRecords } from '../../actions/recordActions';
import Record from './record';

class DisplayRecords extends React.Component {
  constructor(props) {
    super(props)
    this.props.getAllRecords()
    .then(response => {
      console.log('response: ', response);
    })
  }
    
  renderRecords() {
    return this.props.records.map((record, index) => (
      <Record key={index} record={record} index={index} />
    ))
  }

  render() {
    return(
      <div>DisplayRecords
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
