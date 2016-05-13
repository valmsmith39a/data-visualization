import React from 'react';
import { connect } from 'react-redux';
import { editRecord } from '../../actions/recordActions';

class EditRecord extends React.Component {
  constructor(props) {
    super(props)
    this.state = {show: false}
  }

  openEditInput() {
    this.setState({show: true})
  }

  closeEditInput() {
    this.setState({show: false})
    this.props.editRecord({editedRecord: this.refs.editRecordInput.value})
    .then(response => {
      console.log('response: ', response);
    })
  }

  renderEditInput() {
    if(this.state.show) {
      return (
        <div>
          <input ref='editRecordInput' />
          <button onClick={this.closeEditInput.bind(this)} >Save Edit</button>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }

  render() {
    return(
      <div>
        <button onClick={this.openEditInput.bind(this)}>Edit</button>
        {this.renderEditInput()}
      </div>
    )
  }
}

export default connect(null, { editRecord })(EditRecord);
