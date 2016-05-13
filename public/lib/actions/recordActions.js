import axios from 'axios';

export const GET_ALL_RECORDS = 'GET_ALL_RECORDS';

const GET_ALL_RECORDS_URL = '/records';

export function getAllRecords() {
  console.log('in get all records action');
  const request = axios.get(GET_ALL_RECORDS_URL)

  return {
    type: GET_ALL_RECORDS,
    payload: request
  }
}
