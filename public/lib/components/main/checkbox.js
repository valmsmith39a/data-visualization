import React from 'react';
import { connect } from 'react-redux';

class CheckboxInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {checked: false}
    this.toggleCheckbox = this.toggleCheckbox.bind(this)
  }

  toggleCheckbox() {
    this.setState({checked: !this.state.checked})
  }

  render() {
    return(
      <div>
        <input type='checkbox' checked={this.state.checked} onClick={this.toggleCheckbox} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(CheckboxInput)
