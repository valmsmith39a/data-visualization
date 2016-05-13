import axios from 'axios';

export const GET_ALL_RECORDS = 'GET_ALL_RECORDS';
export const CREATE_RECORD = 'CREATE_RECORD';
export const EDIT_RECORD = 'EDIT_RECORD';

const GET_ALL_RECORDS_URL = '/records';
const CREATE_RECORD_URL = '/records';
const EDIT_RECORD_URL = '/records';

export function getAllRecords() {
  const request = axios.get(GET_ALL_RECORDS_URL)

  return {
    type: GET_ALL_RECORDS,
    payload: request
  }
}

export function createRecord(record) {
  const request = axios.post(CREATE_RECORD_URL, record)

  return {
    type: CREATE_RECORD,
    payload: request
  }
}

export function editRecord(newRecord) {
  const request = axios.put(EDIT_RECORD_URL, newRecord)

  return {
    type: EDIT_RECORD,
    payload: request
  }
}
