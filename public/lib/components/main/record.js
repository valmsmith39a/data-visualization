import React from 'react';
import EditRecord from './editRecord';
import DeleteRecord from './deleteRecord';
import CheckboxInput from './checkbox';
import Like from './like';

export default ({ record, index }) => (
  <li>
    {record.record}
    <EditRecord index={index} />
    <DeleteRecord index={index} />
    <CheckboxInput index={index} checkboxToggle={record.checkbox} />
    <Like index={index} />
  </li>
)
