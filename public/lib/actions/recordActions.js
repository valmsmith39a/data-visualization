import axios from 'axios';

export const GET_ALL_RECORDS = 'GET_ALL_RECORDS';
export const CREATE_RECORD = 'CREATE_RECORD';
export const EDIT_RECORD = 'EDIT_RECORD';
export const DELETE_RECORD = 'DELETE_RECORD';
export const TOGGLE_CHECK = 'TOGGLE_CHECK';
export const LIKE = 'LIKE';
export const GET_LIKES = 'GET_LIKES';
export const CREATE_LIKE = 'CREATE_LIKE';

const GET_ALL_RECORDS_URL = '/records';
const CREATE_RECORD_URL = '/records';
const EDIT_RECORD_URL = '/records';
const DELETE_RECORD_URL = '/records';
const TOGGLE_CHECK_URL = '/records/togglecheck/';

const GET_LIKES_URL = '/records/likes';

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

export function editRecord(newRecord, index) {
  const request = axios.put(`${EDIT_RECORD_URL}/${index}`, newRecord)

  return {
    type: EDIT_RECORD,
    payload: request
  }
}

export function deleteRecord(index) {
  const request = axios.delete(`${DELETE_RECORD_URL}/${index}`)

  return {
    type: DELETE_RECORD,
    payload: request
  }
}

export function toggleCheck(index, toggleCheck) {
  return {
    type: TOGGLE_CHECK,
    payload: {index: index, toggleCheck: toggleCheck}
  }
}

export function like(index) {
  const request = axios.put(`records/likes/${index}`)

  return {
    type: LIKE,
    payload: request
  }
}

export function getLikes() {
  const request = axios.get(GET_LIKES_URL)

  return {
    type: GET_LIKES,
    payload: request
  }
}

export function createLike(like) {
  const request = axios.post('records/likes', like)

  return {
    type: CREATE_LIKE,
    payload: request
  }
}
