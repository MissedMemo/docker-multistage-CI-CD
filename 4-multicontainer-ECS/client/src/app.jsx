import React, { Component } from 'react'

class App extends Component {

  state = {
    appointments: []
  }

  componentDidMount() {
    // simulate fetch from API...
    const appointments = [ 'lunch with Emily', 'call Ted', 'parent-teacher night' ]
    this.setState({ appointments })
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
