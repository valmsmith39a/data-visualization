import React from 'react';
import EditRecord from './editRecord';
import DeleteRecord from './deleteRecord';

export default ({ record: { record }, index }) => (
  <li>
    {record}
    <EditRecord index={index} />
    <DeleteRecord index={index} />
  </li>
)
