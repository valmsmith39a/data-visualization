import axios from 'axios';

export const GET_ALL_RECORDS = 'GET_ALL_RECORDS';

const GET_ALL_RECORDS_URL = 'records/';

export default function getAllRecords() {
  const request = axios.get()
  return {
    type: GET_ALL_RECORDS,
    payload: request
  }
}
