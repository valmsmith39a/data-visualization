import React from 'react';
import { connect } from 'react-redux';
import { getAllRecords } from '../../actions/RecordActions/index';


class DisplayRecords extends React.Component {
  constructor(props) {
    super(props)
    // this.props.getAllRecords()
  }

  renderRecords() {
    return this.props.records.map((record, index) => {
      return <Record key={index} record={record} />
    })
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
