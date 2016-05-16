import React from 'react';
import EditRecord from './editRecord';
import DeleteRecord from './deleteRecord';
import CheckboxInput from './checkbox';

export default ({ record, index }) => (
  <li>
    {record.record}
    <EditRecord index={index} />
    <DeleteRecord index={index} />
    <CheckboxInput index={index} checkboxToggle={record.checkbox} />
  </li>
)
