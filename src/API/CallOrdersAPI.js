import { getPersistedUser } from '../components/localStorage/index.jsx'

export function callOrdersAPI(){
  const header = new Headers()
  header.append('Authorization', getPersistedUser().token)
  header.append('Accept', 'application/json')

  const options = {
    method: 'GET',
    headers: header,
  }
    
  return fetch('https://lab-api-bq.herokuapp.com/orders', options)
    .then((response) => response.json()) 
    .then((response) =>  response)
};