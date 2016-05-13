import axios from 'axios';

export const GET_ALL_RECORDS = 'GET_ALL_RECORDS';
export const CREATE_RECORD = 'CREATE_RECORD';

const GET_ALL_RECORDS_URL = '/records';
const CREATE_RECORD_URL = '/records';

export function getAllRecords() {
  console.log('in get all records action');
  const request = axios.get(GET_ALL_RECORDS_URL)

  return {
    type: GET_ALL_RECORDS,
    payload: request
  }
}

export function createRecord(record, index) {
  const request = axios.post(`${CREATE_RECORD_URL}/${index}`, record)

  return {
    type: CREATE_RECORD,
    payload: request
  }
}
