//import axios from 'axios'

const urlAPI = 'http://localhost:3001/api/v1'
const urlAppointments = `${urlAPI}/appointments`

export const getAppointments = () =>
  fetch( urlAppointments )
    .then( res => // handle invalid sub-path (API + 'dogs') which DOES NOT reject, but returns empty object!
      res.ok ? res.json() : Promise.reject( new Error('invalid path!') )
    )
    .catch( err => Promise.reject(err) )