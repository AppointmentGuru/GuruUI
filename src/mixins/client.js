export default {
  methods: {
    clientInitials (client) {
      if (client.first_name) {
        return client.first_name.substr(0, 1) + client.last_name.substr(0, 1)
      } else {
        return '?'
      }
    },
    clientFullname (client) {
      if (client) {
        let str = ''
        if (client.first_name) {
          str = client.first_name
        }
        if (client.last_name) {
          str = str + ' ' + client.last_name
        }
        return str
      } else {
        return 'n/a'
      }
    },
    clientFilter (clientList, searchText) {
      if (!searchText) {
        return clientList
      } else {
        return clientList.filter(function (item) {
          let fullName = item.client.first_name + ' ' + item.client.last_name
          return fullName
            .toLowerCase()
            .includes(searchText.toLowerCase())
        })
      }
    }
  }
}
