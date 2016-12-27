import moment from 'moment'
// todo: move into folder, each filter is it's own mixin so they can be imported seperately

export default {
  methods: {
    naturalday (date) {
      const today = moment()
      return moment(date).calendar(today, {
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        nextWeek: 'dddd',
        lastDay: '[Yesterday]',
        lastWeek: '[Last] dddd',
        sameElse: 'ddd D MMM '
      })
    },
    dateformat (date, format) { return moment(date).format(format) },
    timeStringFormat (str, format) {
      let m = moment(moment().format(`YYYY-MM-DD ${str}`))
      return m.format(format)
    }
  }
}
