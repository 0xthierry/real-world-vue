import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(page, limit) {
    return apiClient.get('/events', {
      params: {
        _limit: limit,
        _page: page
      }
    })
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  }
}