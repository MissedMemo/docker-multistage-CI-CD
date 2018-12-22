
const getAppointments = function(req, res) {
  // retrieve data from appointments service...
  const appointments = [ 'lunch with Emily', 'call Ted', 'parent-teacher night' ]
  res.json( appointments )
}

module.exports = {
  getAppointments
}