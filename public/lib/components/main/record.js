import React from 'react';
import EditRecord from './editRecord';
import DeleteRecord from './deleteRecord';

export default ({ record, index }) => (
  <li>
    {record}
    <EditRecord />
    <DeleteRecord />
  </li>
)
