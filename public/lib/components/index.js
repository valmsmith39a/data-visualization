import React from 'react';
import InputRecord from './main/inputRecord';
import DisplayRecords from './main/DisplayRecords';

export default class RootComponent extends React.Component {
  render() {
    return(
      <div>
        <InputRecord />
        <DisplayRecords />
      </div>
    )
  }
}
