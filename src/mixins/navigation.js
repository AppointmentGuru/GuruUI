export default {
  methods: {
    back () {
      this.$router.back()
    },
    goto (pageName) {
      let route = { name: pageName }
      this.$router.push(route)
    }
  }
}
