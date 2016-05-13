import React from 'react';
import InputRecord from './main/inputRecord';

export default class RootComponent extends React.Component {
  render() {
    return(
      <div>Hello from Root Component
        <InputRecord />
      </div>
    )
  }
}
