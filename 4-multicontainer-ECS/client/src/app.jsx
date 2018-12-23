import React, { Component } from 'react'

import { getAppointments } from './api-client'

class App extends Component {

  state = {
    appointments: []
  }

  componentDidMount() {
    
    getAppointments()
      .then( appointments => {
        console.log('response was:', appointments )
        this.setState({ appointments })
      })
      .catch( err => console.log('errrrrr....', err ))
  }

  render() {

    const { appointments } = this.state

    return appointments && <div className='app'>
      { appointments.map( appt =>
         <div key={appt} className='appointment'>{ appt }</div>
      )}
    </div>
  }
}

export default App
