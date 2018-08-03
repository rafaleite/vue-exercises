<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="user.username">
        </div>
        <div class="form-group">
          <label>E-Mail</label>
          <input type="text" class="form-control" v-model="user.email">
        </div>

        <button class="btn btn-primary" @click="submit">Save</button>
        <hr>
        <div class="form-group">
          <label>Node</label>
          <select v-model="node" class="form-control">
            <option value="data">Data</option>
            <option value="data2">Data_2</option>
          </select>
        </div>
        <button class="btn btn-primary" @click="fetchData">Get Users</button> <div v-if="isLoading">carregando</div>
        <br><br>
        <ul class="list-group">
          <li class="list-group-item" v-for="u in users" :key="u.username" v-if="users.length > 0">
            {{u.username}} - {{ u.email }}
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resource: {},
      user: {
        username: '',
        email: ''
      },
      users: [],
      isLoading: false,
      node: 'data'
    }
  },
  methods: {
    submit() {
      // this.$http.post('data.json', this.user)
      //     .then(result => {
      //       console.log(result)
      //       this.fetchData()
      //       this.resetUser()
      //     }, error => {
      //       console.log(error)
      //     })

      this.resource.save({}, this.user).then(response => {
        this.fetchData()
        this.resetUser()
      }, error => {
        console.log(error)
      })

      this.resource.saveAlt(this.user)
    },
    fetchData() {
      this.isLoading = true
      // this.$http.get('data.json')
      //     .then(response => {
      //       return response.json()
      //     }).then(data => {
      //       const resultArray = []
      //       for(let key in data) {
      //         resultArray.push(data[key])
      //       }
      //       this.users = resultArray
      //       this.isLoading = false
      //     })
      this.resource.get({node: this.node})
          .then(response => {
            return response.json()
          }).then(data => {
            const resultArray = []
            for(let key in data) {
              resultArray.push(data[key])
            }
            this.users = resultArray
            this.isLoading = false
          })

    },
    resetUser() {
      this.user.username = ''
      this.user.email = ''
    }
  },
  created() {
    const customActions = {
      saveAlt: {method: 'POST', url: 'customsave.json'},
      getData: {method: 'GET'}
    }
    this.resource = this.$resource('{node}.json', {}, customActions)
  }

}
</script>

<style>
</style>
