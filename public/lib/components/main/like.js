import React from 'react';
import { connect } from 'react-redux';

class Like extends React.Component {
  render() {
    return(
      <div>
        Like Component 
      </div>
    )
  }
}

export default connect(null, null)(Like)
