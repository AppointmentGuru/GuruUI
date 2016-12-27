import moment from 'moment'

export default {
  methods: {
    itemClassName (item) {
      if (item.type === 'slot') {
        return 'status-slot'
      }
      if (item.status) {
        return 'status-' + item.status.toLowerCase()
      }
      return 'item'
    },
    appointmentTitle (appointment) {
      if (appointment.status === 'B') {
        return appointment.title
      }
      if (appointment.full_name &&
          appointment.full_name.length > 1) {
        return appointment.full_name
      }
      if (appointment.title) {
        return appointment.title
      }
    },
    getDuration (start, end) {
      let millis = end - start
      let duration = moment.duration(millis, 'milliseconds')
      if (duration.hours() > 0) {
        return `${duration.hours()}h${duration.minutes()}`
      } else {
        return `${duration.minutes()}m`
      }
    },
    duration (appointment) {
      let start = moment(appointment.start_time)
      let end = moment(appointment.end_time)
      return this.getDuration(start, end)
    },
    slotDuration (slot) {
      let start = moment(moment().format(`YYYY-MM-DD ${slot.start_time}`))
      let end = moment(moment().format(`YYYY-MM-DD ${slot.stop_time}`))
      return this.getDuration(start, end)
    }
  }
}
