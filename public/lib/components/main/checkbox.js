import React from 'react';
import { toggleCheck } from '../../actions/recordActions';
import { connect } from 'react-redux';

class CheckboxInput extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {checked: false} // Toggle using component state
    this.toggleCheckbox = this.toggleCheckbox.bind(this)
  }

  toggleCheckbox() {
    // this.setState({checked: !this.state.checked}) // Toggle using component state
    this.props.toggleCheck(this.props.index, this.props.checkboxToggle)
  }
  // toggle checkbox with component state
  // <input type='checkbox' checked={this.state.checked} onClick={this.toggleCheckbox} />
  render() {
    return(
      <div>
        <input type='checkbox' checked={this.props.checkboxToggle} onClick={this.toggleCheckbox} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { toggleCheck })(CheckboxInput)
