import React from 'react';
import EditRecord from './editRecord';

export default ({ record, index }) => (
  <li>
    {record}
    <EditRecord />
  </li>
)
