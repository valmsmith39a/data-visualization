import React from 'react';
import { connect } from 'react-redux';
import { getAllRecords } from '../../actions/RecordActions/index';


class DisplayRecords extends React.Component {
  constructor(props) {
    super(props)
    // this.props.getAllRecords()
  }

  renderRecords() {
    return (
      <ul>
        this.state.records.map(record => {
          return <Record record={record} index={index} />
        })
      </ul>
    )
  }

  render() {
    return(
      <div>DisplayRecords
        {this.renderRecords()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, { getAllRecords })(DisplayRecords)
